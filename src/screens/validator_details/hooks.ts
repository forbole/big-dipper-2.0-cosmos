import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { formatToken } from '@utils/format_token';
import { convertMsgsToModels } from '@msg';
import {
  useValidatorDetailsQuery,
  ValidatorDetailsQuery,
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
  useValidatorLastSeenListenerSubscription,
  ValidatorLastSeenListenerSubscription,
} from '@graphql/types';
import { useDesmosProfile } from '@hooks';
import { validatorToDelegatorAddress } from '@recoil/profiles';
import { getValidatorCondition } from '@utils/get_validator_condition';
import { chainConfig } from '@src/configs';
import {
  SlashingParams,
} from '@models';
import { ValidatorDetailsState } from './types';

const initialTokenDenom: TokenUnit = {
  value: '0',
  displayDenom: '',
  baseDenom: '',
  exponent: 0,
};

const initialState: ValidatorDetailsState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    validator: '',
    operatorAddress: '',
    selfDelegateAddress: '',
    description: '',
    website: '',
  },
  status: {
    status: 0,
    jailed: false,
    tombstoned: false,
    condition: 0,
    commission: 0,
    missedBlockCounter: 0,
    signedBlockWindow: 0,
    lastSeen: '',
  },
  votingPower: {
    height: 0,
    overall: initialTokenDenom,
    self: 0,
  },
  transactions: {
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  },
};

export const useValidatorDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ValidatorDetailsState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const {
    fetchDesmosProfile, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      const address = validatorToDelegatorAddress(R.pathOr('', ['query', 'address'], router));

      fetchDesmosProfile(address);
    }
  }, [R.pathOr('', ['query', 'address'], router)]);

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useValidatorDetailsQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  useValidatorLastSeenListenerSubscription({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onSubscriptionData: (data) => {
      handleSetState({
        status: formatLastSeen(data.subscriptionData.data),
      });
    },
  });

  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${R.pathOr('', ['query', 'address'], router)}}`,
    },
    onCompleted: (data) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
      const stateChange = {
        transactions: {
          data: newItems,
          hasNextPage: itemsLength === 51,
          isNextPageLoading: false,
          offsetCount: state.transactions.offsetCount + LIMIT,
        },
      };

      handleSetState(stateChange);
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery.fetchMore({
      variables: {
        offset: state.transactions.offsetCount,
        limit: LIMIT + 1,
      },
    }).then(({ data }) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
      const stateChange = {
        transactions: {
          data: newItems,
          hasNextPage: itemsLength === 51,
          isNextPageLoading: false,
          offsetCount: state.transactions.offsetCount + LIMIT,
        },
      };
      handleSetState(stateChange);
    });
  };

  // ==========================
  // Parse Data
  // ==========================
  const formatTransactions = (data: GetMessagesByAddressQuery) => {
    let formattedData = data.messagesByAddress;
    if (data.messagesByAddress.length === 51) {
      formattedData = data.messagesByAddress.slice(0, 51);
    }
    return formattedData.map((x) => {
      const { transaction } = x;

      // =============================
      // messages
      // =============================
      const messages = convertMsgsToModels(transaction);

      return ({
        height: transaction.height,
        hash: transaction.hash,
        messages: {
          count: messages.length,
          items: messages,
        },
        success: transaction.success,
        timestamp: transaction.block.timestamp,
      });
    });
  };

  const formatLastSeen = (data: ValidatorLastSeenListenerSubscription) => {
    if (data.preCommit.length) {
      const preCommit = data.preCommit[0];
      return ({
        lastSeen: preCommit.timestamp,
      });
    }

    return {};
  };

  const formatAccountQuery = (data: ValidatorDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.validator.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // ============================
    // overview
    // ============================
    const formatOverview = () => {
      const operatorAddress = R.pathOr('', ['validator', 0, 'validatorInfo', 'operatorAddress'], data);
      const selfDelegateAddress = R.pathOr('', ['validator', 0, 'validatorInfo', 'selfDelegateAddress'], data);
      const profile = {
        validator: operatorAddress,
        operatorAddress,
        selfDelegateAddress,
        description: R.pathOr('', ['validatorDescriptions', 0, 'details'], data.validator[0]),
        website: R.pathOr('', ['validatorDescriptions', 0, 'website'], data.validator[0]),
      };

      return profile;
    };

    stateChange.overview = formatOverview();

    // ============================
    // status
    // ============================
    const formatStatus = () => {
      const slashingParams = SlashingParams.fromJson(R.pathOr({}, ['slashingParams', 0, 'params'], data));
      const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], data.validator[0]);
      const { signedBlockWindow } = slashingParams;
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

      const profile = {
        status: R.pathOr(3, ['validatorStatuses', 0, 'status'], data.validator[0]),
        jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], data.validator[0]),
        tombstoned: R.pathOr(false, ['validatorSigningInfos', 0, 'tombstoned'], data.validator[0]),
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], data.validator[0]),
        condition,
        missedBlockCounter,
        signedBlockWindow,
      };

      return profile;
    };

    stateChange.status = formatStatus();
    // ============================
    // votingPower
    // ============================
    const formatVotingPower = () => {
      const selfVotingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], data.validator[0]);

      const votingPower = {
        self: selfVotingPower,
        overall: formatToken(
          R.pathOr(0, ['stakingPool', 0, 'bonded'], data),
          chainConfig.votingPowerTokenUnit,
        ),
        height: R.pathOr(0, ['validatorVotingPowers', 0, 'height'], data.validator[0]),
      };

      return votingPower;
    };
    stateChange.votingPower = formatVotingPower();

    return stateChange;
  };

  return {
    state,
    loadNextPage,
  };
};

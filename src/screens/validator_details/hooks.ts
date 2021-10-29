import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { formatDenom } from '@utils/format_denom';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
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
  StakingParams,
  SlashingParams,
} from '@models';
import { ValidatorDetailsState } from './types';

const initialTokenDenom = {
  value: 0,
  denom: '',
  format: '',
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
    selfDelegatePercent: 0,
    selfDelegate: initialTokenDenom,
  },
  delegations: {
    count: 0,
    data: [],
  },
  redelegations: {
    count: 0,
    data: [],
  },
  undelegations: {
    count: 0,
    data: [],
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
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
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
      const self = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], data.validator[0]);

      const totalDelegations = data.validator[0].delegations.reduce((a, b) => {
        return a + numeral(R.pathOr(0, ['amount', 'amount'], b)).value();
      }, 0);

      const [selfDelegate] = data.validator[0].delegations.filter(
        (x) => x.delegatorAddress === data.validator[0].validatorInfo.selfDelegateAddress,
      );
      const selfDelegateAmount = formatDenom(
        numeral(R.pathOr(0, ['amount', 'amount'], selfDelegate)).value(),
        R.pathOr(0, ['amount', 'denom'], selfDelegate),
      );
      const selfDelegatePercent = (numeral(R.pathOr(0, ['amount', 'amount'], selfDelegate)).value() / totalDelegations) * 100;

      const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
      const votingPower = {
        self,
        selfDelegate: selfDelegateAmount,
        selfDelegatePercent,
        overall: formatDenom(
          R.pathOr(0, ['stakingPool', 0, 'bonded'], data),
          stakingParams.bondDenom,
        ),
        height: R.pathOr(0, ['validatorVotingPowers', 0, 'height'], data.validator[0]),
      };

      return votingPower;
    };
    stateChange.votingPower = formatVotingPower();

    // ============================
    // delegations
    // ============================
    const formatDelegations = () => {
      const delegations = data.validator[0].delegations.map((x) => {
        return ({
          amount: formatDenom(x.amount.amount, x.amount.denom),
          delegator: x.delegatorAddress,
        });
      }).sort((a, b) => (a.amount.value < b.amount.value ? 1 : -1));
      return {
        data: delegations,
        count: delegations.length,
      };
    };
    stateChange.delegations = formatDelegations();

    // ============================
    // redelegations
    // ============================
    const formatRedelegations = () => {
      const redelegations = [
        ...data.validator[0].redelegationsByDstValidatorAddress.map((x) => {
          return ({
            to: x.to,
            from: x.from,
            linkedUntil: x.completionTime,
            amount: formatDenom(x.amount.amount, x.amount.denom),
            delegator: x.delegatorAddress,
          });
        }),
        ...data.validator[0].redelegationsBySrcValidatorAddress.map((x) => {
          return ({
            to: x.to,
            from: x.from,
            linkedUntil: x.completionTime,
            amount: formatDenom(x.amount.amount, x.amount.denom),
            delegator: x.delegatorAddress,
          });
        }),
      ].sort((a, b) => (a.amount.value < b.amount.value ? 1 : -1));

      return {
        data: redelegations,
        count: redelegations.length,
      };
    };
    state.redelegations = formatRedelegations();

    // ============================
    // unbondings
    // ============================
    const formatUndelegations = () => {
      const undelegations = data.validator[0].unbonding.map((x) => {
        return ({
          delegator: x.delegatorAddress,
          amount: formatDenom(x.amount.amount, x.amount.denom),
          linkedUntil: x.completionTimestamp,
          commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
        });
      }).sort((a, b) => (a.amount.value < b.amount.value ? 1 : -1));

      return {
        data: undelegations,
        count: undelegations.length,
      };
    };

    state.undelegations = formatUndelegations();

    return stateChange;
  };

  return {
    state,
    loadNextPage,
  };
};

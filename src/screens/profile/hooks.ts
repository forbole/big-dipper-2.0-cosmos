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
  AccountQuery,
  useAccountQuery,
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
} from '@graphql/types';
import { getDenom } from '@utils/get_denom';
import { useDesmosProfile } from '@hooks';
import { chainConfig } from '@src/configs';
import { ProfileDetailState } from './types';

// const defaultTokenUnit = {
//   value: 0,
//   denom: '',
//   format: '',
// };

const initialState: ProfileDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
  transactions: {
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  },
};

export const useProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProfileDetailState>(initialState);

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
      fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
    }
  },
  [R.pathOr('', ['query', 'address'], router)]);

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useAccountQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
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
  // Format Data
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

  const formatAccountQuery = (data: AccountQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.account.length) {
      stateChange.exists = false;
      return stateChange;
    }

    const rewardsDict = {};
    // log all the rewards
    data.account[0].delegationRewards.forEach((x) => {
      const denomAmount = getDenom(x.amount, chainConfig.primaryTokenUnit);
      const denomFormat = formatDenom(denomAmount.amount, chainConfig.primaryTokenUnit);
      rewardsDict[x.validator.validatorInfo.operatorAddress] = denomFormat;
    });
    // set default rewards for delegations without parsed rewards
    data.account[0].delegations.forEach((x) => {
      const validatorAddress = x.validator.validatorInfo.operatorAddress;
      if (!rewardsDict[validatorAddress]) {
        rewardsDict[validatorAddress] = formatDenom(0, chainConfig.primaryTokenUnit);
      }
    });

    // ============================
    // overview
    // ============================
    const formatOverview = () => {
      const overview = {
        address: data.account[0].address,
        withdrawalAddress: R.pathOr(data.account[0].address, ['account', 0, 'delegationRewards', 0, 'withdrawAddress'], data),
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    return stateChange;
  };

  return {
    state,
    loadNextPage,
  };
};

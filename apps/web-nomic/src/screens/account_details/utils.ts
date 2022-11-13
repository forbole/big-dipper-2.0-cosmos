import axios from 'axios';
import * as R from 'ramda';
import {
  AccountBalancesDocument,
  AccountWithdrawalAddressDocument,
} from '@src/graphql/general/account_details_documents';

import chainConfig from 'ui/chainConfig';

export const fetchAvailableBalances = async (address: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountBalancesDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchAccountWithdrawalAddress = async (address: string) => {
  const defaultReturnValue = {
    withdrawalAddress: {
      address,
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountWithdrawalAddressDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

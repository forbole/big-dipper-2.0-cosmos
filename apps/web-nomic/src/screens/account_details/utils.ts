import axios from 'axios';
import * as R from 'ramda';
import {
  AccountBalancesDocument,
} from '@src/graphql/general/account_details_documents';

export const fetchAvailableBalances = async (address: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountBalancesDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

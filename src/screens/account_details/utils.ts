import axios from 'axios';
import * as R from 'ramda';
import { toValidatorAddress } from '@utils/prefix_convert';
import {
  AccountCommissionDocument,
} from '@graphql/types';

export const fetchCommission = async (address: string) => {
  const defaultReturnValue = {
    commission: {
      coins: null,
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        validatorAddress: toValidatorAddress(address),
      },
      query: AccountCommissionDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

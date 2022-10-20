import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  AccountTypeDocument,
} from '@src/graphql/account_details_documents';
// import { chainConfig } from '@src/configs';
// import { useDesmosProfile } from '@hooks';
import {
  AccountDetailState, ACCOUNT_TYPES,
} from './types';

const initialState: AccountDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  accountType: '',
};

const ACCOUNT_TYPE_MAP: {[key: string]: string} = {
  token: ACCOUNT_TYPES.TOKEN,
  token_account: ACCOUNT_TYPES.TOKEN_ACCOUNT,
  nonce_account: ACCOUNT_TYPES.NONCE_ACCOUNT,
  native_account: ACCOUNT_TYPES.NATIVE_ACCOUNT,
  stake_account: ACCOUNT_TYPES.STAKE_ACCOUNT,
  vote_account: ACCOUNT_TYPES.VOTE_ACCOUNT,
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  // const {
  //   fetchDesmosProfile, formatDesmosProfile,
  // } = useDesmosProfile({
  //   onComplete: (data) => {
  //     handleSetState({
  //       desmosProfile: formatDesmosProfile(data),
  //     });
  //   },
  // });

  // useEffect(() => {
  //   handleSetState(initialState);
  //   if (chainConfig.extra.profile) {
  //     fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
  //   }
  // },
  // [R.pathOr('', ['query', 'address'], router)]);

  // ==========================
  // Fetch Data
  // ==========================
  useEffect(() => {
    getAccountType();
  }, [router.query.address]);

  const getAccountType = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: router.query.address,
        },
        query: AccountTypeDocument,
      });
      if (data.errors) {
        throw Error();
      }

      const accountType = R.pathOr(
        'native_account',
        ['data', 'actionsAccountInfo', 'parsed', 'type'],
        data,
      );
      handleSetState({
        loading: false,
        accountType: ACCOUNT_TYPE_MAP[accountType] || '',
      });
    } catch (error) {
      handleSetState({
        loading: false,
        exists: false,
      });
    }
  };

  return {
    state,
  };
};

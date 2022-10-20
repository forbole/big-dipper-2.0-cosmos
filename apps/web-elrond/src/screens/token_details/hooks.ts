import {
  useState, useEffect,
} from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { TOKEN_DETAILS } from '@api';
import { TokenDetailsState } from './types';

export const useTokenDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TokenDetailsState>({
    loading: true,
    exists: true,
    profile: {
      name: '',
      identifier: '',
      description: '',
      imageUrl: '',
    },
    overview: {
      owner: '',
      decimals: 0,
      website: '',
      email: '',
    },
    stats: {
      identifier: '',
      accounts: 0,
      transactions: 0,
      supply: '',
    },
  });

  useEffect(() => {
    getTokenDetail();
  }, [router.query.token]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const getTokenDetail = async () => {
    try {
      const { data: tokenData } = await axios.get(
        TOKEN_DETAILS(router.query.token as string),
      );

      // profile
      const profile = {
        name: R.pathOr('', ['name'], tokenData),
        identifier: R.pathOr('', ['identifier'], tokenData),
        description: R.pathOr('', ['assets', 'description'], tokenData),
        imageUrl: R.pathOr('', ['assets', 'pngUrl'], tokenData),
      };

      // overview
      const overview = {
        owner: R.pathOr('', ['owner'], tokenData),
        decimals: R.pathOr(0, ['decimals'], tokenData),
        website: R.pathOr('', ['assets', 'website'], tokenData),
        email: R.pathOr('', ['assets', 'social', 'email'], tokenData),
      };

      // stats
      const stats = {
        identifier: R.pathOr('', ['identifier'], tokenData),
        accounts: R.pathOr(0, ['accounts'], tokenData),
        transactions: R.pathOr(0, ['transactions'], tokenData),
        supply: R.pathOr('', ['supply'], tokenData),
      };

      handleSetState({
        loading: false,
        profile,
        overview,
        stats,
      });
    } catch (error) {
      handleSetState({
        loading: false,
        exists: false,
      });
      console.log(error.message);
    }
  };

  return {
    state,
  };
};

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { TOKEN_DETAILS } from '@/api';
import type { TokenDetailsState } from '@/screens/token_details/types';

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

  const handleSetState = useCallback(
    (stateChange: (prevState: TokenDetailsState) => TokenDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getTokenDetail = async () => {
      try {
        const { data: tokenData } = await axios.get(TOKEN_DETAILS(router.query.token as string));

        // profile
        const profile = {
          name: tokenData?.name ?? '',
          identifier: tokenData?.identifier ?? '',
          description: tokenData?.assets?.description ?? '',
          imageUrl: tokenData?.assets?.pngUrl ?? '',
        };

        // overview
        const overview = {
          owner: tokenData?.owner ?? '',
          decimals: tokenData?.decimals ?? 0,
          website: tokenData?.assets?.website ?? '',
          email: tokenData?.assets?.social?.email ?? '',
        };

        // stats
        const stats = {
          identifier: tokenData?.identifier ?? '',
          accounts: tokenData?.accounts ?? 0,
          transactions: tokenData?.transactions ?? 0,
          supply: tokenData?.supply ?? '',
        };

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          profile,
          overview,
          stats,
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          exists: false,
        }));
        console.error((error as Error).message);
      }
    };

    getTokenDetail();
  }, [handleSetState, router.query.token]);

  return {
    state,
  };
};

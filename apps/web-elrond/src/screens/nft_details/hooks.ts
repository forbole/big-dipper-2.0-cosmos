import { useState, useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { NFT_DETAILS } from '@api';
import type { BlockDetailsState } from './types';

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailsState>({
    loading: true,
    exists: true,
    overview: {
      identifier: '',
      collection: '',
      name: '',
      type: '',
      creator: '',
      owner: '',
      minted: 0,
      ticker: '',
    },
  });

  useEffect(() => {
    const handleSetState = (stateChange: any) => {
      setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
    };
  
    const getBlockDetails = async () => {
      try {
        const { data: nftData } = await axios.get(NFT_DETAILS(router.query.nft as string));
  
        handleSetState({
          loading: false,
          overview: {
            identifier: R.pathOr('', ['identifier'], nftData),
            collection: R.pathOr('', ['collection'], nftData),
            name: R.pathOr('', ['name'], nftData),
            type: R.pathOr('', ['type'], nftData),
            creator: R.pathOr('', ['creator'], nftData),
            owner: R.pathOr('', ['owner'], nftData),
            minted: R.pathOr('', ['timestamp'], nftData),
            ticker: R.pathOr('', ['ticker'], nftData),
          },
        });
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.log((error as any).message);
      }
    };

    getBlockDetails();
  }, [router.query.nft]);

  return {
    state,
  };
};

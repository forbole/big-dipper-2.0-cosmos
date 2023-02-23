import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { NFT_DETAILS } from '@/api';
import type { BlockDetailsState } from '@/screens/nft_details/types';

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

  const handleSetState = useCallback(
    (stateChange: (prevState: BlockDetailsState) => BlockDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getBlockDetails = async () => {
      try {
        const { data: nftData } = await axios.get(NFT_DETAILS(router.query.nft as string));

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          overview: {
            identifier: nftData?.identifier ?? '',
            collection: nftData?.collection ?? '',
            name: nftData?.name ?? '',
            type: nftData?.type ?? '',
            creator: nftData?.creator ?? '',
            owner: nftData?.owner ?? '',
            minted: nftData?.timestamp ?? '',
            ticker: nftData?.ticker ?? '',
          },
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

    getBlockDetails();
  }, [handleSetState, router.query.nft]);

  return {
    state,
  };
};

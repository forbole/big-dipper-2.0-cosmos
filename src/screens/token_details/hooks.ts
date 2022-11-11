import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { Cw20TokenInfo } from './types';
import { fetchCW20TokenInfo } from './utils';

const initialState: Cw20TokenInfo = {
  address: '',
  name: '',
  denom: '',
  exponent: 0,
  circulatingSupply: 0,
};

export const useTokenDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<Cw20TokenInfo>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    fetchTokenInfo();
  }, [router.query.address]);

  const fetchTokenInfo = async () => {
    const address = router.query.address as string;
    const tokenInfo = await fetchCW20TokenInfo(address);
    handleSetState(tokenInfo);
  };

  return {
    state,
  };
};

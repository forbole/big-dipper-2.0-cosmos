import { ECONOMICS } from '@/api';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import axios from 'axios';
import * as R from 'ramda';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

export const useMarketRecoil = () => {
  const [_market, setMarket] = useRecoilState(writeMarket) as [
    AtomState,
    SetterOrUpdater<AtomState>
  ];
  useEffect(() => {
    const getEconomics = async () => {
      try {
        const { data } = await axios.get(ECONOMICS);
        setMarket({
          marketCap: R.pathOr(0, ['marketCap'], data) as number,
          price: R.pathOr(0, ['price'], data) as number,
          supply: R.pathOr(0, ['totalSupply'], data) as number,
          apr: R.pathOr(0, ['apr'], data) as number,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getEconomics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

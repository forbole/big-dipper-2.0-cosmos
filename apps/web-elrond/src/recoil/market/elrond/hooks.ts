import { useEffect } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { ECONOMICS } from '@api';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import { writeMarket } from './selectors';
import type { AtomState } from './types';

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
        console.log(error);
      }
    };
    getEconomics();
  }, [setMarket]);
};

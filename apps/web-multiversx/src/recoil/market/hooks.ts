import axios from 'axios';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { ECONOMICS } from '@/api';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';

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
          marketCap: data?.marketCap ?? 0,
          price: data?.price ?? 0,
          supply: data?.totalSupply ?? 0,
          apr: data?.apr ?? 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getEconomics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

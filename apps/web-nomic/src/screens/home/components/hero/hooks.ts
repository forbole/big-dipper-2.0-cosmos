import { useState } from 'react';
// import * as R from 'ramda';
// import chainConfig from '@/chainConfig';
import type { HeroState } from '@/screens/home/components/hero/types';

export const useHero = () => {
  const [state] = useState<HeroState>({
    loading: true,
    exists: true,
    tokenPriceHistory: [],
  });

  return {
    state,
  };
};

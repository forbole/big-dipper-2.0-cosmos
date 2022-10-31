import { useState } from 'react';
// import * as R from 'ramda';
// import { chainConfig } from 'ui/dist';
import { HeroState } from './types';

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

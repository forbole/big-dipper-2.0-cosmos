import { selector } from 'recoil';
import { mergeStateChange } from 'ui/utils/merge_state_change';
import { atomState } from './atom';
import type { AtomState } from './types';

const getMarket = ({ get }: any): AtomState => {
  const state = get(atomState);
  return state;
};

export const writeMarket = selector({
  key: 'nomic/market.write.market',
  get: getMarket,
  set: ({ get, set }, value) => {
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, value);
    set(atomState, newState);
  },
});

export const readMarket = selector({
  key: 'nomic/market.read.market',
  get: getMarket,
});

import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { atomState } from '@/recoil/market/atom';
import type { AtomState } from '@/recoil/market/types';
import { mergeStateChange } from '@/utils/merge_state_change';

const getMarket: ReadOnlySelectorOptions<AtomState>['get'] = ({ get }) => {
  const state = get(atomState);
  return state;
};

export const writeMarket = selector({
  key: 'market.write.market',
  get: getMarket,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, value);
    set(atomState, newState);
  },
});

export const readMarket = selector({
  key: 'market.read.market',
  get: getMarket,
});

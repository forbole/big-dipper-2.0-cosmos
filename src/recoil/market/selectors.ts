import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import { atomState } from './atom';
import { AtomState } from './types';

const getMarket = ({ get }): AtomState => {
  const state = get(atomState);
  return state;
};

export const writeMarket = selector({
  key: 'market.write.market',
  get: getMarket,
  set: ({
    get, set,
  }, value: AtomState) => {
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, value);
    set(atomState, newState);
  },
});

export const readMarket = selector({
  key: 'market.read.market',
  get: getMarket,
});

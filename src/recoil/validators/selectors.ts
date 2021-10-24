import { selectorFamily } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import { atomFamilyState } from './atom';
import { AtomState } from './types';

const getValidator = (address: string) => ({ get }): AtomState => {
  // get desmos profile first
  // get validator profile after
  const state = get(atomFamilyState(address));
  return state;
};

// export const writeMarket = selector({
//   key: 'market.write.market',
//   get: getMarket,
//   set: ({
//     get, set,
//   }, value: AtomState) => {
//     const prevState = get(atomState);
//     const newState = mergeStateChange(prevState, value);
//     set(atomState, newState);
//   },
// });

export const readValidator = selectorFamily({
  key: 'validator.read.validator',
  get: getValidator,
});

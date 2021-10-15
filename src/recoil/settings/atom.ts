import {
  atom, selector,
} from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import {
  AtomState, Theme,
} from './types';

const initialState: AtomState = {
  theme: 'light',
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom({
  key: 'settings',
  default: initialState,
});

// export const getState = selector({
//   key: 'settingsGetState',
//   get: ({ get }) => {
//     const state = get(atomState);
//     return state;
//   },
// });

export const getTheme = selector({
  key: 'settingsGetTheme',
  get: ({ get }): Theme => {
    const state = get(atomState);
    return state.theme;
  },
  set: ({
    get, set,
  }, newTheme) => {
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      theme: newTheme,
    });
    return set(atomState, newState);
  },
});

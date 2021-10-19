import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import { atomState } from './atom';
import { Theme } from './types';

export const writeTheme = selector({
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
    set(atomState, newState);
  },
});

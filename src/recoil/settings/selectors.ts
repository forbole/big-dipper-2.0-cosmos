import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import {
  setItem, THEME_KEY,
} from '@utils/localstorage';
import { atomState } from './atom';
import { Theme } from './types';

export const writeTheme = selector({
  key: 'settingsWriteTheme',
  get: ({ get }): Theme => {
    const state = get(atomState);
    return state.theme;
  },
  set: ({
    get, set,
  }, newTheme: Theme) => {
    setItem(THEME_KEY, newTheme);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      theme: newTheme,
    });
    set(atomState, newState);
  },
});

export const readTheme = selector({
  key: 'settingsReadTheme',
  get: ({ get }): Theme => {
    const state = get(atomState);
    return state.theme;
  },
});

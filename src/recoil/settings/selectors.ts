import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import {
  THEME_KEY,
  DATE_KEY,
  setItem,
} from '@utils/localstorage';
import { atomState } from './atom';
import {
  Theme,
  Date,
} from './types';

const getTheme = ({ get }): Theme => {
  const state = get(atomState);
  return state.theme;
};

export const writeTheme = selector({
  key: 'settingsWriteTheme',
  get: getTheme,
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
  get: getTheme,
});

// =============================================
// =============================================

const getDate = ({ get }): Date => {
  const state = get(atomState);
  return state.dateFormat;
};

export const writeDate = selector({
  key: 'settingsWriteDate',
  get: getDate,
  set: ({
    get, set,
  }, newDate: Date) => {
    setItem(DATE_KEY, newDate);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      dateFormat: newDate,
    });
    set(atomState, newState);
  },
});

export const readDate = selector({
  key: 'settingsWriteDate',
  get: getDate,
});

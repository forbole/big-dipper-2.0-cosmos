import { ReadOnlySelectorOptions, selector } from 'recoil';
import { mergeStateChange } from 'ui/utils/merge_state_change';
import { THEME_KEY, DATE_KEY, TX_KEY, setItem } from 'ui/utils/localstorage';
import { atomState } from './atom';
import type { Theme, Date, Tx } from './types';

const getTheme: ReadOnlySelectorOptions<Theme>['get'] = ({ get }): Theme => {
  const state = get(atomState);
  return state.theme;
};

export const writeTheme = selector({
  key: 'settings.write.theme',
  get: getTheme,
  set: ({ get, set }, newTheme) => {
    setItem(THEME_KEY, newTheme);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      theme: newTheme,
    });
    set(atomState, newState);
  },
});

export const readTheme = selector({
  key: 'settings.read.theme',
  get: getTheme,
});

// =============================================
// =============================================

const getDate: ReadOnlySelectorOptions<Date>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.dateFormat;
};

export const writeDate = selector({
  key: 'settings.write.date',
  get: getDate,
  set: ({ get, set }, newDate) => {
    setItem(DATE_KEY, newDate);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      dateFormat: newDate,
    });
    set(atomState, newState);
  },
});

export const readDate = selector({
  key: 'settings.read.date',
  get: getDate,
});

// =============================================
// =============================================

const getTx: ReadOnlySelectorOptions<Tx>['get'] = ({ get }): Tx => {
  const state = get(atomState);
  return state.txListFormat;
};

export const writeTx = selector({
  key: 'settings.write.tx',
  get: getTx,
  set: ({ get, set }, newTx) => {
    setItem(TX_KEY, newTx);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      txListFormat: newTx,
    });
    set(atomState, newState);
  },
});

export const readTx = selector({
  key: 'settings.read.tx',
  get: getTx,
});

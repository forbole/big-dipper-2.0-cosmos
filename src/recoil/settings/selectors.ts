import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import {
  THEME_KEY,
  DATE_KEY,
  TX_KEY,
  setItem,
} from '@utils/localstorage';
import { atomState } from './atom';
import {
  Theme,
  Date,
  Tx,
} from './types';

const getTheme = ({ get }): Theme => {
  const state = get(atomState);
  return state.theme;
};

export const writeTheme = selector({
  key: 'settings.write.theme',
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
  key: 'settings.read.theme',
  get: getTheme,
});

// =============================================
// =============================================

const getDate = ({ get }): Date => {
  const state = get(atomState);
  return state.dateFormat;
};

export const writeDate = selector({
  key: 'settings.write.date',
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
  key: 'settings.read.date',
  get: getDate,
});

// =============================================
// =============================================

const getTx = ({ get }): Tx => {
  const state = get(atomState);
  return state.txListFormat;
};

export const writeTx = selector({
  key: 'settings.write.tx',
  get: getTx,
  set: ({
    get, set,
  }, newTx: Tx) => {
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

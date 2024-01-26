import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { atomState } from '@/recoil/settings/atom';
import type { Date, TimeFormat, Theme, Tx } from '@/recoil/settings/types';
import {
  DATE_KEY,
  setItem,
  THEME_KEY,
  TX_KEY,
  TIME_FORMAT_KEY,
  FILTER_MSG_TYPES_KEY,
} from '@/utils/localstorage';
import { mergeStateChange } from '@/utils/merge_state_change';

const getTheme: ReadOnlySelectorOptions<Theme>['get'] = ({ get }): Theme => {
  const state = get(atomState);
  return state.theme;
};

export const writeTheme = selector({
  key: 'settings.write.theme',
  get: getTheme,
  set: ({ get, set }, newTheme) => {
    if (newTheme instanceof DefaultValue) return;
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
    if (newDate instanceof DefaultValue) return;
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

const getTimeFormat: ReadOnlySelectorOptions<TimeFormat>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.timeFormat;
};

export const writeTimeFormat = selector({
  key: 'settings.write.timeFormat',
  get: getTimeFormat,
  set: ({ get, set }, newTimeFormat) => {
    if (newTimeFormat instanceof DefaultValue) return;
    setItem(TIME_FORMAT_KEY, newTimeFormat);
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      timeFormat: newTimeFormat,
    });
    set(atomState, newState);
  },
});

export const readTimeFormat = selector({
  key: 'settings.read.timeFormat',
  get: getTimeFormat,
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
    if (newTx instanceof DefaultValue) return;
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

const getFilterMsgTypes: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.filterMsgTypes;
};

export const writeFilterMsgTypes = selector({
  key: 'settings.write.filterMsgTypes',
  get: getFilterMsgTypes,
  set: ({ get, set }, newMsgFilter) => {
    if (newMsgFilter instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      filterMsgTypes: newMsgFilter,
    });
    set(atomState, newState);
  },
});

export const readFilterMsgTypes = selector({
  key: 'settings.read.filterMsgTypes',
  get: getFilterMsgTypes,
});

const getOpenDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openDialog;
};

export const writeOpenDialog = selector({
  key: 'settings.write.openDialog',
  get: getOpenDialog,
  set: ({ get, set }, newOpenDialogValue) => {
    if (newOpenDialogValue instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      openDialog: newOpenDialogValue,
    });
    set(atomState, newState);
  },
});

export const readOpenDialog = selector({
  key: 'settings.read.openDialog',
  get: getOpenDialog,
});

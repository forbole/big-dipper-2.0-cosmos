import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { atomState } from '@/recoil/transactions_filter/atom';
import { mergeStateChange } from '@/utils/merge_state_change';

const getFilterMsgTypes: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.filterMsgTypes;
};

export const writeFilterMsgTypes = selector({
  key: 'txsFilter.write.filterMsgTypes',
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
  key: 'txsFilter.read.filterMsgTypes',
  get: getFilterMsgTypes,
});

const getOpenDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openDialog;
};

export const writeOpenDialog = selector({
  key: 'txsFilter.write.openDialog',
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
  key: 'txsFilter.read.openDialog',
  get: getOpenDialog,
});

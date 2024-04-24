import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { atomState } from '@/recoil/transactions_filter/atom';
import { mergeStateChange } from '@/utils/merge_state_change';

const getFilter: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.filter;
};

export const writeFilter = selector({
  key: 'txsFilter.write.filter',
  get: getFilter,
  set: ({ get, set }, newFilter) => {
    if (newFilter instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      filter: newFilter,
    });
    set(atomState, newState);
  },
});

export const readFilter = selector({
  key: 'txsFilter.read.filter',
  get: getFilter,
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

const getSelectedMsgTypes: ReadOnlySelectorOptions<string[]>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.selectedMsgTypes;
};

export const writeSelectedMsgTypes = selector({
  key: 'txsFilter.write.selectedMsgTypes',
  get: getSelectedMsgTypes,
  set: ({ get, set }, newSelectedMsgTypes) => {
    if (newSelectedMsgTypes instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      selectedMsgTypes: newSelectedMsgTypes,
    });
    set(atomState, newState);
  },
});

export const readSelectedMsgTypes = selector({
  key: 'txsFilter.read.selectedMsgTypes',
  get: getSelectedMsgTypes,
});

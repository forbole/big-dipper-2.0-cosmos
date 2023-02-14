import { atomState } from '@/recoil/big_dipper_networks/atom';
import type { Networks, Selected } from '@/recoil/big_dipper_networks/types';
import { mergeStateChange } from '@/utils/merge_state_change';
import { DefaultValue, selector, type ReadOnlySelectorOptions } from 'recoil';

const getNetworks: ReadOnlySelectorOptions<Networks>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.networks;
};

export const writeNetworks = selector({
  key: 'bigDipperNetworksWriteNetwork',
  get: getNetworks,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      networks: value,
    });
    set(atomState, newState);
  },
});

export const readNetworks = selector({
  key: 'bigDipperNetworks.read.network',
  get: getNetworks,
});

const getSelectedNetworks: ReadOnlySelectorOptions<Selected>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.selected;
};

export const writeSelectedNetwork = selector({
  key: 'bigDipperNetworks.write.selectedNetwork',
  get: getSelectedNetworks,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      selected: value,
    });
    set(atomState, newState);
  },
});

export const readSelectedNetwork = selector({
  key: 'bigDipperNetworks.read.selectedNetwork',
  get: getSelectedNetworks,
});

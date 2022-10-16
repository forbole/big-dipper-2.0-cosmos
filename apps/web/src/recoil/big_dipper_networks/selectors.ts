import { selector } from 'recoil';
import { mergeStateChange } from '@utils/merge_state_change';
import { atomState } from './atom';
import {
  Networks,
  Selected,
} from './types';

const getNetworks = ({ get }): Networks => {
  const state = get(atomState);
  return state.networks;
};

export const writeNetworks = selector({
  key: 'bigDipperNetworksWriteNetwork',
  get: getNetworks,
  set: ({
    get, set,
  }, value: Networks) => {
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

const getSelectedNetworks = ({ get }): Selected => {
  const state = get(atomState);
  return state.selected;
};

export const writeSelectedNetwork = selector({
  key: 'bigDipperNetworks.write.selectedNetwork',
  get: getSelectedNetworks,
  set: ({
    get, set,
  }, value: Selected) => {
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

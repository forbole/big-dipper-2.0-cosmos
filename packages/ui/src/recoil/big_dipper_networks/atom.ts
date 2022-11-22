import { atom } from 'recoil';
import chainConfig from 'ui/chainConfig';
import type { AtomState } from './types';

const initialState: AtomState = {
  networks: [],
  selected: chainConfig.network,
};

export const atomState = atom<AtomState>({
  key: 'bigDipperNetworks',
  default: initialState,
});

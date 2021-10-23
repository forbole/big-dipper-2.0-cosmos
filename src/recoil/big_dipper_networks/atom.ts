import { atom } from 'recoil';
import { chainConfig } from '@configs';
import { AtomState } from './types';

const initialState: AtomState = {
  networks: [],
  selected: chainConfig.network,
};

export const atomState = atom<AtomState>({
  key: 'bigDipperNetworks',
  default: initialState,
});

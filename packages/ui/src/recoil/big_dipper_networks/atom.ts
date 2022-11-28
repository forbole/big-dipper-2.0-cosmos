import chainConfig from '@/chainConfig';
import type { AtomState } from '@/recoil/big_dipper_networks/types';
import { atom } from 'recoil';

const initialState: AtomState = {
  networks: [],
  selected: chainConfig.network,
};

export const atomState = atom<AtomState>({
  key: 'bigDipperNetworks',
  default: initialState,
});

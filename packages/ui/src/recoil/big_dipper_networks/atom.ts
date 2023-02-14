import { atom } from 'recoil';
import chainConfig from '@/chainConfig';
import type { AtomState } from '@/recoil/big_dipper_networks/types';

const { network } = chainConfig();

const initialState = new Promise<AtomState>((resolve) => {
  resolve({
    networks: [],
    selected: network,
  });
});

export const atomState = atom<AtomState>({
  key: 'bigDipperNetworks',
  default: initialState,
});

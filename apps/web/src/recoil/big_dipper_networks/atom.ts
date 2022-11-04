import { atom } from 'recoil';
import chainConfig from 'ui/dist/chainConfig';
import { AtomState } from './types';

const initialState: AtomState = {
  networks: [],
  selected: chainConfig.id,
};

export const atomState = atom<AtomState>({
  key: 'bigDipperNetworks',
  default: initialState,
});

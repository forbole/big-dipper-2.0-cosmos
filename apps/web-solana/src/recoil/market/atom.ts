import { atom } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = {
  marketCap: 0,
  maxSupply: {
    value: '0',
    exponent: 0,
    baseDenom: '',
    displayDenom: '',
  },
  price: 0,
  inflation: 0,
};

export const atomState = atom<AtomState>({
  key: 'market',
  default: initialState,
});

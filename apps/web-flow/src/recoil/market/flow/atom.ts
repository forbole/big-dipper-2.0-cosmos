import { atom } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = {
  price: null,
  supply: {
    value: '0',
    displayDenom: '',
    baseDenom: '',
    exponent: 0,
  },
  marketCap: null,
};

export const atomState = atom<AtomState>({
  key: 'flow/market',
  default: initialState,
});

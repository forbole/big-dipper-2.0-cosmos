import type { AtomState } from '@/recoil/market/types';
import { atom } from 'recoil';

const initialState: AtomState = {
  price: null,
  supply: {
    value: '0',
    displayDenom: '',
    baseDenom: '',
    exponent: 0,
  },
  marketCap: null,
  inflation: 0,
  apr: 0,
};

export const atomState = atom<AtomState>({
  key: 'nomic/market',
  default: initialState,
});

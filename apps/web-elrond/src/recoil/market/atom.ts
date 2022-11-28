import type { AtomState } from '@/recoil/market/types';
import { atom } from 'recoil';

const initialState: AtomState = {
  marketCap: 0,
  price: 0,
  supply: 0,
  apr: 0,
};

export const atomState = atom<AtomState>({
  key: 'elrond/market',
  default: initialState,
});

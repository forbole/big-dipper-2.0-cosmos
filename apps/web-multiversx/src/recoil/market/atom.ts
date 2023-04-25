import { atom } from 'recoil';
import type { AtomState } from '@/recoil/market/types';

const initialState: AtomState = {
  marketCap: 0,
  price: 0,
  supply: 0,
  apr: 0,
};

export const atomState = atom<AtomState>({
  key: 'multiversx/market',
  default: initialState,
});

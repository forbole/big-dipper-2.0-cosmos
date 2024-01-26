import { atom } from 'recoil';
import type { AtomState } from '@/recoil/transactions_filter/types';

const initialState: AtomState = {
  filter: '{}',
  openDialog: false,
};

export const atomState = atom<AtomState>({
  key: 'txsFilter',
  default: initialState,
});

import { atom } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = {
  theme: 'light',
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

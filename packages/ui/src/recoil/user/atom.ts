import { atom } from 'recoil';

export interface AtomState {
  address: string;
  loggedIn: boolean;
}

const initialState: AtomState = {
  address: '',
  loggedIn: false,
};

export const atomState = atom<AtomState>({
  key: 'user',
  default: initialState,
});

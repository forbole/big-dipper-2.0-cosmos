import { atom } from 'recoil';

export interface AtomState {
  address: string;
  pubKey: string;
  walletName: string;
  loggedIn: boolean;
}

const initialState: AtomState = {
  address: '',
  pubKey: '',
  walletName: '',
  loggedIn: false,
};

export const atomState = atom<AtomState>({
  key: 'user',
  default: initialState,
});

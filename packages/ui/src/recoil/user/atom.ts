import { atom } from 'recoil';

export interface PubKey {
  readonly type: string;
  readonly value: string;
}

export interface AtomState {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
}

const initialState: AtomState = {
  address: '',
  pubKey: { type: '', value: '' },
  walletName: '',
  loggedIn: false,
};

export const atomState = atom<AtomState>({
  key: 'user',
  default: initialState,
});

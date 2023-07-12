import { atom } from 'recoil';

export interface PubKey {
  readonly type: string;
  readonly value: string;
}

export interface UserState {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
}

const initialState: UserState = {
  address: '',
  pubKey: { type: '', value: '' },
  walletName: '',
  loggedIn: false,
};

export const atomState = atom<UserState>({
  key: 'user',
  default: initialState,
});

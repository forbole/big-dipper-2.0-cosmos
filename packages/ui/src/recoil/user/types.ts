import { PubKey } from '@/recoil/user/atom';

export interface UserState {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
}

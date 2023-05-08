import { PubKey } from '@/recoil/user/atom';

export interface AtomState {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
}

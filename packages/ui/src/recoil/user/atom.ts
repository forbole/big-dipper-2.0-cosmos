import { atom } from 'recoil';

export const PubKeyType = {
  Secp256k1: 'tendermint/PubKeySecp256k1' as const,
  Ed25519: 'tendermint/PubKeyEd25519' as const,
  Empty: '' as const,
};

export interface PubKey {
  readonly type: typeof PubKeyType.Secp256k1 | typeof PubKeyType.Ed25519 | typeof PubKeyType.Empty;
  readonly value: string;
}

export interface Secp256k1PubKey {
  readonly type: 'tendermint/PubKeySecp256k1';
  readonly value: string;
}

export interface Ed25519PubKey {
  readonly type: 'tendermint/PubKeyEd25519';
  readonly value: string;
}

export interface EmptyPubKey {
  readonly type: '';
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

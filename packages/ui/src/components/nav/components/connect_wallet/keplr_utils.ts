import { SigningCosmosClient } from '@cosmjs/launchpad';
import { OfflineAminoSigner, OfflineDirectSigner } from '@keplr-wallet/types';
import { toBase64 } from '@cosmjs/encoding';
import { PubKey } from '@/recoil/user/atom';
import { keplrURL } from '@/components/nav/components/connect_wallet/api';

export const isKeplrAvailable = () => !!window.keplr;

export const getAccountKey = (keplrChainID: string) => window.keplr?.getKey(keplrChainID);

export const getOfflineSigner = (keplrChainID: string) => {
  const offlineSigner = window.keplr?.getOfflineSigner(keplrChainID);
  return offlineSigner;
};

export const encodeSecp256k1PubKey = (pubKey: Uint8Array): PubKey => ({
  type: 'tendermint/PubKeySecp256k1',
  value: toBase64(pubKey),
});

export const encodeEd25519PubKey = (pubKey: Uint8Array): PubKey => ({
  type: 'tendermint/PubKeyEd25519',
  value: toBase64(pubKey),
});

export const isSecp256k1PubKey = (pubKey: Uint8Array) => {
  if (pubKey.length !== 33 || (pubKey[0] !== 0x02 && pubKey[0] !== 0x03)) {
    return false;
  }
  return true;
};

export const isEd25519PubKey = (pubKey: Uint8Array) => {
  if (pubKey.length !== 32) {
    return false;
  }
  return true;
};

export const getCosmosClient = (
  address: string,
  offlineSigner: OfflineAminoSigner & OfflineDirectSigner
) => {
  // Initialize the gaia api with the offline signer that is injected by Keplr extension.
  const cosmJS = new SigningCosmosClient(keplrURL, address, offlineSigner);
  return cosmJS;
};

export const getOfflineSignerAddress = async (
  offlineSigner: OfflineAminoSigner & OfflineDirectSigner
) => {
  // You can get the address/public keys by `getAccounts` method.
  // It can return the array of address/public key.
  // But, currently, Keplr extension manages only one address/public key pair.
  // XXX: This line is needed to set the sender address for SigningCosmosClient.
  const accounts = await offlineSigner.getAccounts();
  return accounts?.[0]?.address;
};

export const getOfflineSignerPubKey = async (
  offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  // eslint-disable-next-line consistent-return
) => {
  const accounts = await offlineSigner.getAccounts();
  let pubkey;
  if (accounts?.[0]?.pubkey) {
    if (isEd25519PubKey(accounts[0].pubkey)) {
      pubkey = encodeEd25519PubKey(accounts[0].pubkey);
    } else if (isSecp256k1PubKey(accounts[0].pubkey)) {
      pubkey = encodeSecp256k1PubKey(accounts[0].pubkey);
    }
    return pubkey;
  }
};

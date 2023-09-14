import { SigningStargateClient, GasPrice } from '@cosmjs/stargate';
import { OfflineAminoSigner, Key } from '@keplr-wallet/types';
import { toBase64 } from '@cosmjs/encoding';
import { PubKey } from '@/recoil/user/atom';
import chainConfig from '@/chainConfig';

// Get the keplr chain info from chainConfig
const { keplrConfig } = chainConfig();
const { keplrRpc, keplr } = keplrConfig || {};

export const isKeplrAvailable = () => !!window.keplr;

export const getAccountKey = (keplrChainID: string) => window.keplr?.getKey(keplrChainID);

export const getOfflineSigner = (keplrChainID: string) => {
  const offlineSigner = window.keplr?.getOfflineSignerOnlyAmino(keplrChainID);
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

export const getCosmosClient = async (
  address: string,
  mintDenom: string,
  offlineSigner: OfflineAminoSigner
) => {
  // Initialize the gaia api with the offline signer that is injected by Keplr extension.
  // using rpc endpoint instead of keplrURL
  const cosmJS = await SigningStargateClient.connectWithSigner(keplrRpc, offlineSigner, {
    gasPrice: GasPrice.fromString(`0.01${mintDenom}`),
  });

  return cosmJS;
};

export const getKeplrAPI = () => {
  const config = keplr ? JSON.parse(keplr) : '';
  const apiURL: string = config.rest;
  return apiURL;
};

export const getOfflineSignerAddress = async (offlineSigner: OfflineAminoSigner) => {
  // You can get the address/public keys by `getAccounts` method.
  // It can return the array of address/public key.
  // But, currently, Keplr extension manages only one address/public key pair.
  // XXX: This line is needed to set the sender address for SigningCosmosClient.
  const accounts = await offlineSigner.getAccounts();
  return accounts?.[0]?.address;
};

export const getOfflineSignerPubKey = async (
  offlineSigner: OfflineAminoSigner
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

export const getChangedOfflineSignerPubKey = async (
  changedAccount: Key
  // eslint-disable-next-line consistent-return
) => {
  let pubkey;
  if (changedAccount.pubKey) {
    if (isEd25519PubKey(changedAccount.pubKey)) {
      pubkey = encodeEd25519PubKey(changedAccount.pubKey);
    } else if (isSecp256k1PubKey(changedAccount.pubKey)) {
      pubkey = encodeSecp256k1PubKey(changedAccount.pubKey);
    }
    return pubkey;
  }
};

export const getClient = async (chainID: string, baseDenom: string) => {
  let offlineSigner;
  let offlineSignerAddress;
  let client;

  try {
    offlineSigner = getOfflineSigner(chainID);
  } catch (e) {
    return (e as Error).message;
  }

  // get offline signer address
  try {
    if (!offlineSigner) throw new Error('offline signer is undefined');
    offlineSignerAddress = await getOfflineSignerAddress(offlineSigner);
  } catch (e) {
    return (e as Error).message;
  }

  try {
    client = await getCosmosClient(offlineSignerAddress, baseDenom, offlineSigner);
  } catch (e) {
    return (e as Error).message;
  }

  return client;
};

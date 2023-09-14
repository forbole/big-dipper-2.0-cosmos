import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { SessionTypes, ISignClient } from '@walletconnect/types';

const walletConnectClientState = atom<ISignClient | undefined>({
  key: 'walletConnectClientState',
  default: undefined,
  dangerouslyAllowMutability: true,
});

export const useWalletConnectClient = () => useRecoilValue(walletConnectClientState);

export const useSetWalletConnectClient = () => useSetRecoilState(walletConnectClientState);

const walletConnectSessionState = atom<SessionTypes.Struct | undefined>({
  key: 'walletConnectSessionState',
  default: undefined,
  dangerouslyAllowMutability: true,
});

export const useWalletConnectSession = () => useRecoilValue(walletConnectSessionState);

export const useSetWalletConnectSession = () => useSetRecoilState(walletConnectSessionState);

import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { SignClient } from '@walletconnect/sign-client';
import { SessionTypes } from '@walletconnect/types';

const walletConnectClientState = atom<SignClient | undefined>({
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

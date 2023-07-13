import { ChainInfo, Window as KeplrWindow } from '@keplr-wallet/types';
import { useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import chainConfig from '@/chainConfig';
import {
  getAccountKey,
  getCosmosClient,
  getOfflineSigner,
  getOfflineSignerAddress,
  getOfflineSignerPubKey,
  isKeplrAvailable,
} from '@/components/nav/components/connect_wallet/keplr_utils';
import {
  writeIsUserLoggedIn,
  writeUserAddress,
  writeUserPubKey,
  writeWalletName,
} from '@/recoil/user';
import { PubKey } from '@/recoil/user/atom';
import {
  writeOpenAuthorizeConnectionDialog,
  writeOpenInstallKeplrExtensionDialog,
  writeOpenLoginDialog,
  writeOpenLoginSuccessDialog,
  writeOpenPairConnectWalletDialog,
  writeOpenPairKeplrExtensionDialog,
  writeWalletSelection,
} from '@/recoil/wallet';
import {
  ADDRESS_KEY,
  CONNECTION_TYPE,
  PUBKEY_KEY,
  WALLET_NAME_KEY,
  WC_SESSION_TOPIC,
  WC_URI,
  CHAIN_ID,
} from '@/utils/localstorage';
import {
  useSetWalletConnectClient,
  useWalletConnectClient,
  useSetWalletConnectSession,
} from '@/recoil/wallet_connect_client';
import { writeWalletConnectURI } from '@/recoil/wallet_connect_uri';
import {
  ConnectClient,
  InitWalletConnectClient,
} from '@/components/nav/components/connect_wallet/wallet_connect_utils';

// Get the keplr chain info from chainConfig
const {
  network,
  keplrConfig: { keplr },
} = chainConfig();

let keplrCustomChainInfo: ChainInfo | undefined;
if (keplr !== undefined && keplr !== '') {
  keplrCustomChainInfo = JSON.parse(keplr);
}

// Cast window as KeplrWindow
declare const window: KeplrWindow & typeof globalThis;

const useConnectWalletList = () => {
  // UserState
  const [, setUserAddress] = useRecoilState(writeUserAddress) as [string, SetterOrUpdater<string>];
  const [, setUserIsLoggedIn] = useRecoilState(writeIsUserLoggedIn) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [, setUserPubKey] = useRecoilState(writeUserPubKey) as [PubKey, SetterOrUpdater<PubKey>];
  const [, setWalletName] = useRecoilState(writeWalletName) as [string, SetterOrUpdater<string>];

  // WalletState
  const [, setOpenLoginDialog] = useRecoilState(writeOpenLoginDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [, setWalletSelection] = useRecoilState(writeWalletSelection) as [
    string,
    SetterOrUpdater<string>
  ];
  const [, setOpenInstallKeplrExtensionDialog] = useRecoilState(
    writeOpenInstallKeplrExtensionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [, setOpenPairKeplrExtensionDialog] = useRecoilState(writeOpenPairKeplrExtensionDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [, setOpenAuthorizeConnectionDialog] = useRecoilState(
    writeOpenAuthorizeConnectionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [, setOpenLoginSuccessDialog] = useRecoilState(writeOpenLoginSuccessDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [, setOpenPairConnectWalletDialog] = useRecoilState(writeOpenPairConnectWalletDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [walletConnectURI] = useRecoilState(writeWalletConnectURI) as [
    string,
    SetterOrUpdater<string>
  ];

  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  // Wallet Connect Client
  const setWalletConnectClient = useSetWalletConnectClient();
  const walletConnectClient = useWalletConnectClient();

  // Wallet Connect Session
  const setWalletConnectSession = useSetWalletConnectSession();

  const saveUserInfo = (
    address: string,
    pubkey: PubKey | undefined,
    connectionType: string,
    wallet: string,
    chainID: string
  ) => {
    localStorage.setItem(ADDRESS_KEY, address);
    localStorage.setItem(PUBKEY_KEY, JSON.stringify(pubkey));
    localStorage.setItem(CONNECTION_TYPE, connectionType);
    localStorage.setItem(WALLET_NAME_KEY, wallet);
    localStorage.setItem(CHAIN_ID, chainID);
    setUserAddress(address);
    setUserPubKey(pubkey ?? { type: '', value: '' });
    setWalletName(wallet);
    setUserIsLoggedIn(true);
    setErrorMsg(undefined);
  };

  const resetUserInfo = () => {
    localStorage.setItem(ADDRESS_KEY, '');
    localStorage.setItem(PUBKEY_KEY, '');
    localStorage.setItem(WALLET_NAME_KEY, '');
    localStorage.setItem(CONNECTION_TYPE, '');
    localStorage.setItem(CHAIN_ID, '');
    localStorage.setItem(WC_SESSION_TOPIC, '');
    localStorage.setItem(WC_URI, '');
    setShowWalletDetails(false);
    setUserAddress('');
    setUserPubKey({ type: '', value: '' });
    setUserIsLoggedIn(false);
    setWalletConnectClient(undefined);
    setWalletConnectSession(undefined);
    setErrorMsg(undefined);
  };

  const resetWalletInfo = () => {
    setWalletSelection('');
    setErrorMsg(undefined);
  };

  // ------ Login/Logout hooks ------
  const handleLogin = () => {
    setOpenLoginDialog(true);
  };

  const handleLogout = async () => {
    const connectionTypes = localStorage.getItem(CONNECTION_TYPE);
    if (connectionTypes === 'Wallet Connect') {
      if (walletConnectClient) {
        const walletConnectSessionTopic = localStorage.getItem(WC_SESSION_TOPIC) ?? '';

        await walletConnectClient.disconnect({
          topic: walletConnectSessionTopic,
          reason: {
            code: 6000,
            message: 'USER_DISCONNECTED',
          },
        });
        // reset the values
        resetUserInfo();
      } else {
        const client = await InitWalletConnectClient();
        const walletConnectSessionTopic = localStorage.getItem(WC_SESSION_TOPIC) ?? '';
        await client.disconnect({
          topic: walletConnectSessionTopic,
          reason: {
            code: 6000,
            message: 'USER_DISCONNECTED',
          },
        });
        // reset the values
        return resetUserInfo();
      }
    }
    // reset the values
    return resetUserInfo();
  };

  // ------ Connect wallet hooks ------
  const handleConnectWallet = async (wallet: string) => {
    setWalletSelection(wallet);
    switch (wallet) {
      case 'Keplr Extension':
        await continueToKeplrExtensionPairingDialog();
        break;
      case 'Wallet Connect':
        await continueToWalletConnectPairingDialog();
        break;
      case '':
        break;
      default:
        break;
    }
  };

  // ------ Continue dialogs hooks ------
  const continueToKeplrExtensionPairingDialog = () => {
    setOpenLoginDialog(false);

    if (!isKeplrAvailable()) {
      setOpenInstallKeplrExtensionDialog(true);
    } else {
      setOpenPairKeplrExtensionDialog(true);

      // proceed to authorize dialog after 3 seconds
      if (keplrCustomChainInfo?.chainId) {
        setTimeout(() => {
          setOpenPairKeplrExtensionDialog(false);
          continueToAuthorizeKeplrConnectionDialog();
        }, 3000);
      }
    }
  };

  const continueToWalletConnectPairingDialog = async () => {
    setOpenLoginDialog(false);
    setOpenPairConnectWalletDialog(true);

    const client = await InitWalletConnectClient();
    setWalletConnectClient(client);

    const { session, error } = await ConnectClient(client);
    if (error) {
      setErrorMsg(error?.message);
      return;
    }

    if (session) {
      // store wallet connect session and session topic
      localStorage.setItem(WC_SESSION_TOPIC, session?.topic);
      setWalletConnectSession(session);

      setOpenPairConnectWalletDialog(false);
      setOpenAuthorizeConnectionDialog(true);
      setErrorMsg(undefined);
    }

    // Obtain account address
    const account = Object.values(session.namespaces)
      .map((namespace) => namespace.accounts)
      .flat()
      .map((address) => ({
        address: address.split(':')[2],
        algo: 'secp256k1',
        pubkey: Uint8Array.from([]),
      }));

    if (account.length > 0) {
      saveUserInfo(
        account[0].address,
        account[0].pubkey as unknown as PubKey, // currently can't obtain pubkey for wallet connect
        'Wallet Connect',
        'Wallet Connect',
        keplrCustomChainInfo?.chainId ?? network
      );
    }

    continueToLoginSuccessDialog();
  };

  const continueToAuthorizeKeplrConnectionDialog = async () => {
    if (!keplrCustomChainInfo?.chainId) {
      throw new Error('Chain not supported by Keplr');
    }
    setOpenPairKeplrExtensionDialog(false);
    setOpenAuthorizeConnectionDialog(true);

    try {
      // enable the chain inside the app
      try {
        await window.keplr?.enable(keplrCustomChainInfo.chainId);
      } catch (e) {
        if ((e as Error).message.toLowerCase().indexOf('there is no chain info') !== -1) {
          await window.keplr?.experimentalSuggestChain(keplrCustomChainInfo);
        }
      }

      // get offline signer address
      let offlineSigner;
      try {
        offlineSigner = getOfflineSigner(keplrCustomChainInfo.chainId);
      } catch (e) {
        setErrorMsg((e as Error).message);
      }

      // get offline signer address
      let offlineSignerAddress;
      try {
        if (!offlineSigner) throw new Error('offline signer is undefined');
        offlineSignerAddress = await getOfflineSignerAddress(offlineSigner);
      } catch (e) {
        setErrorMsg((e as Error).message);
        return;
      }

      const offlineSignerPubKey = await getOfflineSignerPubKey(offlineSigner);
      const cosmJS = await getCosmosClient(
        offlineSignerAddress,
        keplrCustomChainInfo?.stakeCurrency?.coinMinimalDenom,
        offlineSigner
      );

      if (cosmJS) {
        const key = await getAccountKey(keplrCustomChainInfo.chainId);

        // store user info in state
        saveUserInfo(
          offlineSignerAddress,
          offlineSignerPubKey,
          'Keplr',
          key?.name ?? '',
          keplrCustomChainInfo.chainId
        );

        // continue to Sign in success screen
        continueToLoginSuccessDialog();
      }
    } catch (e) {
      if ((e as Error).message.toLowerCase().indexOf('request rejected') !== -1) {
        closeAuthorizeConnectionDialog();
      }
    }
  };

  const continueToLoginSuccessDialog = () => {
    const address = localStorage.getItem(ADDRESS_KEY);
    // check if user is logged in before opening login success dialog
    if (address !== '') {
      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenAuthorizeConnectionDialog(false);
        setOpenLoginSuccessDialog(true);
        setTimeout(() => {
          setOpenLoginSuccessDialog(false);
        }, 3000);
      }, 3000);
    }
  };

  // ------ Close dialogs hooks ------
  const closeLoginDialog = () => {
    setOpenLoginDialog(false);
    resetWalletInfo();
  };

  const closeInstallKeplrExtensionDialog = () => {
    setOpenInstallKeplrExtensionDialog(false);
    resetWalletInfo();
  };

  const closeAuthorizeConnectionDialog = () => {
    setOpenAuthorizeConnectionDialog(false);
    resetWalletInfo();
  };

  const closeKeplrPairingDialog = () => {
    setOpenPairKeplrExtensionDialog(false);
    resetWalletInfo();
  };

  const closeWalletConnectDialog = () => {
    setOpenPairConnectWalletDialog(false);
    resetWalletInfo();
  };

  const closeLoginSuccessDialog = () => {
    setOpenLoginSuccessDialog(false);
    resetWalletInfo();
  };

  // ------ Wallet details hooks ------
  const handleShowWalletDetails = () => {
    if (showWalletDetails) {
      setShowWalletDetails(false);
    } else {
      setShowWalletDetails(true);
    }
  };

  const closeWalletDetails = () => {
    setShowWalletDetails(false);
  };

  return {
    errorMsg,
    showWalletDetails,
    walletConnectURI,
    continueToAuthorizeKeplrConnectionDialog,
    continueToKeplrExtensionPairingDialog,
    closeAuthorizeConnectionDialog,
    closeInstallKeplrExtensionDialog,
    closeKeplrPairingDialog,
    closeLoginDialog,
    closeWalletConnectDialog,
    closeLoginSuccessDialog,
    closeWalletDetails,
    handleShowWalletDetails,
    handleConnectWallet,
    handleLogin,
    handleLogout,
  };
};

export default useConnectWalletList;

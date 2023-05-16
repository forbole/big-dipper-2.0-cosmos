import chainConfig from '@/chainConfig';
import { wcBridgeURL } from '@/components/nav/components/connect_wallet/api';
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
  writeWalletConnectURI,
  writeWalletSelection,
} from '@/recoil/wallet';
import { ADDRESS_KEY, CONNECTION_TYPE, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';
import { ChainInfo, Window as KeplrWindow } from '@keplr-wallet/types';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import WalletConnect from '@walletconnect/client';
import { useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

// Get the keplr chain info from chainConfig
const { keplr } = chainConfig();

let keplrCustomChainInfo: ChainInfo | undefined;
if (keplr) {
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
  const [walletConnectURI, setWalletConnectURI] = useRecoilState(writeWalletConnectURI) as [
    string,
    SetterOrUpdater<string>
  ];

  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const [wcClient, setWCClient] = useState<WalletConnect | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const saveUserInfo = (
    address: string,
    pubkey: PubKey | undefined,
    connectionType: string,
    wallet: string
  ) => {
    localStorage.setItem(ADDRESS_KEY, address);
    localStorage.setItem(PUBKEY_KEY, JSON.stringify(pubkey));
    localStorage.setItem(CONNECTION_TYPE, connectionType);
    localStorage.setItem(WALLET_NAME_KEY, wallet);
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
    setShowWalletDetails(false);
    setUserAddress('');
    setUserPubKey({ type: '', value: '' });
    setUserIsLoggedIn(false);
    setWCClient(undefined);
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

  const handleLogout = () => {
    const connectionTypes = localStorage.getItem(CONNECTION_TYPE);
    if (connectionTypes === 'Wallet Connect') {
      if (wcClient) {
        wcClient.killSession();
      } else {
        const reconnector = initWalletConnectClient();
        reconnector.killSession();
      }
    }
    // reset the values
    resetUserInfo();
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

  const connectKeplrWallet = async (connector: WalletConnect) => {
    const keplrWallet = new KeplrWalletConnectV1(connector);
    if (keplrWallet && keplrCustomChainInfo?.chainId) {
      setOpenPairConnectWalletDialog(false);
      setOpenAuthorizeConnectionDialog(true);
      setErrorMsg(undefined);

      try {
        await keplrWallet.experimentalSuggestChain(keplrCustomChainInfo);
      } catch (err) {
        // Right now suggest the chain is not supported using wallet connect.
        setErrorMsg(`Chain not supported by Keplr`);
        return;
      }

      // enable connection and approve it inside the mobile app
      // to obtain address, pubkey and wallet name
      try {
        await keplrWallet?.enable(keplrCustomChainInfo.chainId);
      } catch (e) {
        setErrorMsg(`${(e as Error)?.message}`);
        return;
      }

      let keplrOfflineSigner;
      try {
        keplrOfflineSigner = keplrWallet.getOfflineSigner(keplrCustomChainInfo.chainId);
      } catch (e) {
        setErrorMsg(`${(e as Error)?.message}`);
        return;
      }

      if (keplrOfflineSigner) {
        const accounts2 = await keplrOfflineSigner.getAccounts();
        const { address, pubkey } = accounts2[0];
        const key = await keplrWallet.getKey(keplrCustomChainInfo.chainId);
        saveUserInfo(address, pubkey as unknown as PubKey, 'Wallet Connect', key.name);

        // continue to log in success screen
        continueToLoginSuccessDialog();
      } else {
        setErrorMsg(`Chain not supported by Keplr`);
      }
    }
  };

  const initWalletConnectClient = (): WalletConnect => {
    const client = new WalletConnect({
      bridge: wcBridgeURL,
      signingMethods: [
        'keplr_enable_wallet_connect_v1',
        'keplr_get_key_wallet_connect_v1',
        'keplr_sign_amino_wallet_connect_v1',
      ],
      qrcodeModal: {
        open: (uri: string) => {
          setWalletConnectURI(uri);
        },
        close: () => setWalletConnectURI(''),
      },
    });
    setWCClient(client);

    return client;
  };

  const connectWalletConnect = async () => {
    const connector = initWalletConnectClient();
    if (connector.connected && keplrCustomChainInfo?.chainId) {
      connectKeplrWallet(connector);
    }

    if (!connector.connected) {
      // create new session
      connector.createSession();

      connector.on('connect', async (error) => {
        if (error) {
          setErrorMsg(`${error}`);
        } else {
          connectKeplrWallet(connector);
        }
      });

      connector.on('disconnect', () => handleLogout());
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

  const continueToWalletConnectPairingDialog = () => {
    setOpenLoginDialog(false);
    setOpenPairConnectWalletDialog(true);
    connectWalletConnect();
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
      const cosmJS = getCosmosClient(offlineSignerAddress, offlineSigner);

      if (cosmJS) {
        const key = await getAccountKey(keplrCustomChainInfo.chainId);

        // store user info in state
        saveUserInfo(offlineSignerAddress, offlineSignerPubKey, 'Keplr', key?.name ?? '');

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

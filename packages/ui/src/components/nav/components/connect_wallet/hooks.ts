import { SetterOrUpdater, useRecoilState } from 'recoil';
import { useState, useEffect, useMemo } from 'react';
import WalletConnect from '@walletconnect/client';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import { ChainIdQuery, useChainIdQuery } from '@/graphql/types/general_types';
import { PubKey } from '@/recoil/user/atom';
import {
  writeOpenLoginDialog,
  writeWalletSelection,
  writeOpenInstallKeplrExtensionDialog,
  writeOpenPairKeplrExtensionDialog,
  writeOpenAuthorizeConnectionDialog,
  writeOpenLoginSuccessDialog,
  writeOpenPairConnectWalletDialog,
  writeWalletConnectURI,
} from '@/recoil/wallet';
import { ADDRESS_KEY, CONNECTION_TYPE, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';
import {
  writeUserAddress,
  writeIsUserLoggedIn,
  writeUserPubKey,
  writeWalletName,
} from '@/recoil/user';
import {
  isKeplrAvailable,
  enableChain,
  getAccountKey,
  getOfflineSigner,
  getOfflineSignerAddress,
  getOfflineSignerPubKey,
  getCosmosClient,
} from './keplr_utils';
import { wcBridgeURL, keplrCustomChainInfo } from './utils';

// Get the chain ID from a GraphQL query response
const mapChainIdToModel = (data?: ChainIdQuery) => data?.genesis?.[0]?.chainId ?? '';

const useConnectWalletList = () => {
  // keplr chain ID
  const [keplrChainID, setKeplrChainID] = useState<string>('');
  const { data: chainId } = useChainIdQuery();

  useEffect(() => {
    if (chainId) {
      setKeplrChainID(mapChainIdToModel(chainId));
    }
  }, [chainId]);

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
    const keplr = new KeplrWalletConnectV1(connector);
    if (keplr && chainId) {
      setOpenPairConnectWalletDialog(false);
      setOpenAuthorizeConnectionDialog(true);
      setErrorMsg(undefined);

      if (keplrCustomChainInfo !== undefined) {
        try {
          await keplr.experimentalSuggestChain(keplrCustomChainInfo);
        } catch (err) {
          // Right now suggest the chain is not supported using wallet connect.
        }
      }

      // enable connection and approve it inside the mobile app
      // to obtain address, pubkey and wallet name
      try {
        await keplr?.enable(keplrChainID);
      } catch (e) {
        setErrorMsg(`${(e as Error)?.message}`);
      }
      let keplrOfflineSigner;
      try {
        keplrOfflineSigner = keplr.getOfflineSigner(keplrChainID);
      } catch (e) {
        setErrorMsg(`${(e as Error)?.message}`);
      }

      if (keplrOfflineSigner) {
        const accounts2 = await keplrOfflineSigner.getAccounts();
        const { address, pubkey } = accounts2[0];
        const key = await keplr.getKey(keplrChainID);
        saveUserInfo(address, pubkey as unknown as PubKey, 'Wallet Connect', key.name);

        // continue to log in success screen
        continueToLoginSuccessDialog();
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
    if (connector.connected && chainId) {
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
      setTimeout(() => {
        setOpenPairKeplrExtensionDialog(false);
        continueToAuthorizeKeplrConnectionDialog();
      }, 3000);
    }
  };

  const continueToWalletConnectPairingDialog = () => {
    setOpenLoginDialog(false);
    setOpenPairConnectWalletDialog(true);
    connectWalletConnect();
  };

  const continueToAuthorizeKeplrConnectionDialog = async () => {
    setOpenPairKeplrExtensionDialog(false);
    setOpenAuthorizeConnectionDialog(true);

    // enable the chain inside the app
    try {
      await enableChain(keplrChainID);
    } catch (error) {
      const e = error as Error;
      setErrorMsg(e.message);

      // add custom chain info if chain isn't natively integrated to Keplr extension
      if (e.message.toLowerCase().indexOf('There is no chain info')) {
        if (keplrCustomChainInfo !== undefined) {
          await window.keplr?.experimentalSuggestChain(keplrCustomChainInfo);
        } else {
          setErrorMsg('chain is not supported. Please add custom chain info and try again.');
        }
      }
    }

    let offlineSigner;
    try {
      offlineSigner = getOfflineSigner(keplrChainID);
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
      const key = await getAccountKey(keplrChainID);

      // store user info in state
      saveUserInfo(offlineSignerAddress, offlineSignerPubKey, 'Keplr', key?.name ?? '');

      // continue to log in success screen
      continueToLoginSuccessDialog();
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

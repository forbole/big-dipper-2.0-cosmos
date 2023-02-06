import { SigningCosmosClient } from '@cosmjs/launchpad';
import {
  writeUserAddress,
  writeIsUserLoggedIn,
  writeUserPubKey,
  writeWalletName,
} from '@/recoil/user';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { ADDRESS_KEY, CONNECTION_TYPE, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';
import {
  writeOpenLoginDialog,
  writeWalletSelection,
  writeOpenInstallKeplrExtensionDialog,
  writeOpenPairKeplrExtensionDialog,
  writeOpenSelectNetworkDialog,
  writeOpenAuthorizeConnectionDialog,
  writeOpenLoginSuccessDialog,
  writeOpenPairConnectWalletDialog,
  writeTabValue,
  writeShowWalletDetails,
  writeWalletConnectURI,
} from '@/recoil/wallet';
import type { OfflineAminoSigner, OfflineDirectSigner } from '@keplr-wallet/types';
import { toBase64 } from '@cosmjs/encoding';
import { PubKey } from '@/recoil/user/atom';
import WalletConnect from '@walletconnect/client';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';

const keplrChainID = process?.env?.NEXT_PUBLIC_KEPLR_CHAIN_ID ?? '';
const keplrURL = process?.env?.NEXT_PUBLIC_KEPLR_LCD_URL ?? '';
const wcBridgeURL = process?.env?.NEXT_PUBLIC_WC_BRIDGE_URL ?? '';
const keplrCustomChainInfo = process?.env?.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO
  ? JSON.parse(process.env.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO)
  : undefined;

type UserState = {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
};

type WalletState = {
  openLoginDialog: boolean;
  walletSelection: string;
  openInstallKeplrExtensionDialog: boolean;
  openPairKeplrExtensionDialog: boolean;
  openSelectNetworkDialog: boolean;
  openAuthorizeConnectionDialog: boolean;
  openLoginSuccessDialog: boolean;
  openPairConnectWalletDialog: boolean;
  tabValue: number;
  showWalletDetails: boolean;
  walletConnectURI: string;
};

const useConnectWalletList = () => {
  // UserState
  const [userAddress, setUserAddress] = useRecoilState(writeUserAddress) as [
    string,
    SetterOrUpdater<string>
  ];
  const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(writeIsUserLoggedIn) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [userPubKey, setUserPubKey] = useRecoilState(writeUserPubKey) as [
    PubKey,
    SetterOrUpdater<PubKey>
  ];
  const [walletName, setWalletName] = useRecoilState(writeWalletName) as [
    string,
    SetterOrUpdater<string>
  ];

  // WalletState
  const [openLoginDialog, setOpenLoginDialog] = useRecoilState(writeOpenLoginDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [walletSelection, setWalletSelection] = useRecoilState(writeWalletSelection) as [
    string,
    SetterOrUpdater<string>
  ];
  const [openInstallKeplrExtensionDialog, setOpenInstallKeplrExtensionDialog] = useRecoilState(
    writeOpenInstallKeplrExtensionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openPairKeplrExtensionDialog, setOpenPairKeplrExtensionDialog] = useRecoilState(
    writeOpenPairKeplrExtensionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openSelectNetworkDialog, setOpenSelectNetworkDialog] = useRecoilState(
    writeOpenSelectNetworkDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openAuthorizeConnectionDialog, setOpenAuthorizeConnectionDialog] = useRecoilState(
    writeOpenAuthorizeConnectionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openLoginSuccessDialog, setOpenLoginSuccessDialog] = useRecoilState(
    writeOpenLoginSuccessDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openPairConnectWalletDialog, setOpenPairConnectWalletDialog] = useRecoilState(
    writeOpenPairConnectWalletDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [tabValue, setTabValue] = useRecoilState(writeTabValue) as [
    number,
    SetterOrUpdater<number>
  ];
  const [showWalletDetails, setShowWalletDetails] = useRecoilState(writeShowWalletDetails) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [walletConnectURI, setWalletConnectURI] = useRecoilState(writeWalletConnectURI) as [
    string,
    SetterOrUpdater<string>
  ];

  const [wcClient, setWCClient] = useState<WalletConnect | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  // UserState
  const [userState, setUserState] = useState({
    address: userAddress,
    pubKey: userPubKey,
    walletName,
    loggedIn: userIsLoggedIn,
  });

  const handleSetUserState = useCallback((stateChange: (prevState: UserState) => UserState) => {
    setUserState((prevState: UserState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const resetUserState = () => {
    handleSetUserState((prevState: UserState) => ({
      ...prevState,
      address: userAddress,
      pubKey: userPubKey,
      walletName,
      loggedIn: userIsLoggedIn,
    }));
    localStorage.setItem(ADDRESS_KEY, '');
    localStorage.setItem(PUBKEY_KEY, '');
    localStorage.setItem(WALLET_NAME_KEY, '');
    localStorage.setItem(CONNECTION_TYPE, '');
  };

  // WalletState
  const [walletState, setWalletState] = useState({
    openLoginDialog,
    walletSelection,
    openInstallKeplrExtensionDialog,
    openPairKeplrExtensionDialog,
    openSelectNetworkDialog,
    openAuthorizeConnectionDialog,
    openLoginSuccessDialog,
    openPairConnectWalletDialog,
    tabValue,
    showWalletDetails,
    walletConnectURI,
  });

  const handleSetWalletState = useCallback(
    (stateChange: (prevState: WalletState) => WalletState) => {
      setWalletState((prevState: WalletState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const resetWalletState = () => {
    handleSetWalletState((prevState: WalletState) => ({
      ...prevState,
      openLoginDialog,
      walletSelection,
      openInstallKeplrExtensionDialog,
      openPairKeplrExtensionDialog,
      openSelectNetworkDialog,
      openAuthorizeConnectionDialog,
      openLoginSuccessDialog,
      openPairConnectWalletDialog,
      tabValue,
      showWalletDetails,
      walletConnectURI,
    }));
  };

  const continueToAuthorizeKeplrConnectionDialog = async () => {
    setOpenPairKeplrExtensionDialog(false);
    setOpenAuthorizeConnectionDialog(true);

    // enable the chain inside the app
    try {
      await enableChain();
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
      offlineSigner = getOfflineSigner();
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
      const key = await getAccountKey();

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

  const continueToKeplrExtensionPairingDialog = () => {
    if (!isKeplrAvailable()) {
      setOpenInstallKeplrExtensionDialog(true);
    } else {
      // handle retry button
      if (openInstallKeplrExtensionDialog) {
        setOpenInstallKeplrExtensionDialog(false);
      }
      resetUserState();
      setOpenPairKeplrExtensionDialog(true);

      // proceed to authorize dialog after 3 seconds
      // if continue button hasn't been pressed
      setTimeout(() => {
        setOpenPairKeplrExtensionDialog(false);
        continueToAuthorizeKeplrConnectionDialog();
      }, 3000);
    }
  };

  const continueToWalletConnectPairingDialog = () => {
    setOpenPairConnectWalletDialog(true);
    getWalletConnect();
  };

  const handleCloseAuthorizeConnectionDialog = () => {
    setOpenAuthorizeConnectionDialog(false);
    setWalletOption('');
    setErrorMsg(undefined);
  };

  const handleCloseInstallKeplrExtensionDialog = () => {
    setOpenInstallKeplrExtensionDialog(false);
    setWalletOption('');
    setErrorMsg(undefined);
  };

  const handleCloseKeplrPairingDialog = () => {
    setOpenPairKeplrExtensionDialog(false);
    setWalletOption('');
    setErrorMsg(undefined);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
    resetUserState();
    resetWalletState();
    setWalletOption('');
    setErrorMsg(undefined);
  };

  const handleCloseLoginSuccessDialog = () => {
    setOpenLoginSuccessDialog(false);
  };

  const handleCloseSelectNetworkDialog = () => {
    setOpenSelectNetworkDialog(false);
    setWalletOption('');
  };

  const handleCloseWalletDetails = () => {
    setShowWalletDetails(false);
  };

  const handleConnectButter = () => {
    setOpenLoginDialog(false); // TO DO
  };

  const handleConnectWallet = async () => {
    setOpenLoginDialog(false);
    switch (walletSelection) {
      case 'Butter':
        break;
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

  const handleConnectWalletConnect = () => {
    setOpenLoginDialog(false); // TO DO
  };

  const handleClosetWalletConnectDialog = () => {
    setOpenPairConnectWalletDialog(false);
    setWalletOption('');
  };

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

  const handleOpenWalletDetails = () => {
    setShowWalletDetails(true);
  };

  const handleShowWalletDetails = () => {
    if (showWalletDetails) {
      setShowWalletDetails(false);
    } else setShowWalletDetails(true);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const setWalletOption = (walletOption: string) => {
    setWalletSelection(walletOption);
  };

  const isKeplrAvailable = () => !!window.keplr;

  const enableChain = () => window.keplr?.enable(keplrChainID);

  const getAccountKey = () => window.keplr?.getKey(keplrChainID);

  const getOfflineSigner = () => {
    const offlineSigner = window.keplr?.getOfflineSigner(keplrChainID);
    return offlineSigner;
  };

  const getOfflineSignerAddress = async (
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  ) => {
    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();
    return accounts[0].address;
  };

  const getOfflineSignerPubKey = async (
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
    // eslint-disable-next-line consistent-return
  ) => {
    const accounts = await offlineSigner.getAccounts();
    let pubkey;
    if (accounts) {
      if (isSecp256k1PubKey(accounts[0].pubkey)) {
        pubkey = encodeSecp256k1PubKey(accounts[0].pubkey);
      }
      if (isEd25519PubKey(accounts[0].pubkey)) {
        pubkey = encodeEd25519PubKey(accounts[0].pubkey);
      }
      return pubkey;
    }
  };

  const getCosmosClient = (
    address: string,
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  ) => {
    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(keplrURL, address, offlineSigner);
    return cosmJS;
  };

  const encodeSecp256k1PubKey = (pubKey: Uint8Array): PubKey => ({
    type: 'tendermint/PubKeySecp256k1',
    value: toBase64(pubKey),
  });

  const encodeEd25519PubKey = (pubKey: Uint8Array): PubKey => ({
    type: 'tendermint/PubKeyEd25519',
    value: toBase64(pubKey),
  });

  const isSecp256k1PubKey = (pubKey: Uint8Array) => {
    if (pubKey.length !== 33 || (pubKey[0] !== 0x02 && pubKey[0] !== 0x03)) {
      return false;
    }
    return true;
  };

  const isEd25519PubKey = (pubKey: Uint8Array) => {
    if (pubKey.length !== 32) {
      return false;
    }
    return true;
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

  const getKeplrWalletConnect = async (connector: WalletConnect) => {
    const keplr = new KeplrWalletConnectV1(connector);
    if (keplr) {
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

  const getWalletConnect = async () => {
    const connector = initWalletConnectClient();
    if (connector.connected) {
      getKeplrWalletConnect(connector);
    }

    if (!connector.connected) {
      // create new session
      connector.createSession();

      connector.on('connect', async (error) => {
        if (error) {
          console.warn(error);
          setErrorMsg(`${error}`);
        } else {
          getKeplrWalletConnect(connector);
        }
      });

      connector.on('disconnect', () => handleLogout());
    }
  };

  return {
    errorMsg,
    showWalletDetails,
    tabValue,
    userState,
    walletState,
    walletConnectURI,
    continueToAuthorizeKeplrConnectionDialog,
    continueToLoginSuccessDialog,
    continueToKeplrExtensionPairingDialog,
    handleCloseAuthorizeConnectionDialog,
    handleCloseInstallKeplrExtensionDialog,
    handleCloseKeplrPairingDialog,
    handleCloseLoginDialog,
    handleCloseLoginSuccessDialog,
    handleCloseSelectNetworkDialog,
    handleCloseWalletDetails,
    handleConnectButter,
    handleConnectWallet,
    handleConnectWalletConnect,
    handleClosetWalletConnectDialog,
    handleLogin,
    handleLogout,
    handleOpenWalletDetails,
    handleShowWalletDetails,
    handleTabChange,
    setWalletOption,
  };
};

export default useConnectWalletList;

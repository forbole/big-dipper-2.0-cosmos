import { ChainInfo } from '@keplr-wallet/types';
import { SignClient } from '@walletconnect/sign-client';
import { SessionTypes } from '@walletconnect/types';
import chainConfig from '@/chainConfig';
import { WC_URI } from '@/utils/localstorage';
import {
  bigDipperIcon,
  bigDipperRepositoryURL,
  walletConnectProjectID,
  walletConnectRelayURL,
} from './utils';

const {
  keplrConfig: { keplr },
} = chainConfig();

let keplrCustomChainInfo: ChainInfo | undefined;
if (keplr !== undefined && keplr !== '') {
  keplrCustomChainInfo = JSON.parse(keplr);
}

export async function InitWalletConnectClient() {
  const signClient = await SignClient.init({
    projectId: walletConnectProjectID,
    relayUrl: walletConnectRelayURL,
    metadata: {
      name: 'Big Dipper Wallet',
      description: 'Big Dipper Wallet',
      url: bigDipperRepositoryURL,
      icons: [bigDipperIcon],
    },
  });
  return signClient;
}

export async function ConnectClient(clientNew: SignClient) {
  let session: SessionTypes.Struct | null;

  try {
    const { uri, approval } = await clientNew.connect({
      pairingTopic: clientNew.topic,
      requiredNamespaces: {
        cosmos: {
          methods: ['cosmos_getAccounts', 'cosmos_signAmino', 'cosmos_signDirect'],
          chains: [`cosmos:${keplrCustomChainInfo.chainId}`],
          events: [],
        },
      },
    });

    if (uri) {
      localStorage.setItem(WC_URI, uri);
      try {
        session = await approval();
      } catch (error) {
        return { undefined, error };
      }
    }
  } catch (error) {
    return { undefined, error };
  }

  return { session, undefined };
}

import { ChainInfo } from '@keplr-wallet/types';
import { SignClient } from '@walletconnect/sign-client';
import { SessionTypes, ISignClient } from '@walletconnect/types';
import chainConfig from '@/chainConfig';
import { WC_URI } from '@/utils/localstorage';
import {
  bigDipperIcon,
  bigDipperURL,
  walletConnectProjectID,
  walletConnectRelayURL,
} from '@/components/nav/components/connect_wallet/utils';

const {
  network,
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
      url: bigDipperURL,
      icons: [bigDipperIcon],
    },
  });
  return signClient;
}

export async function ConnectClient(clientNew: ISignClient) {
  let session: SessionTypes.Struct | undefined;

  try {
    const { uri, approval } = await clientNew.connect({
      requiredNamespaces: {
        cosmos: {
          methods: ['cosmos_getAccounts', 'cosmos_signAmino', 'cosmos_signDirect'],
          chains: keplrCustomChainInfo
            ? [`cosmos:${keplrCustomChainInfo.chainId}`]
            : [`cosmos:${network}`],
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

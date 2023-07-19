import { ISignClient } from '@walletconnect/types';

interface IWCSignAmino {
  client: ISignClient;
  sessionTopic: string;
  signerAddress: string;
  chainId: string;
  msgs: TransactionMsg[];
  memo: string;
  fee: { amount: any[]; gas: string };
}

export const wcSignAmino = async ({
  client,
  sessionTopic,
  signerAddress,
  chainId,
  msgs,
  memo,
  fee,
}: IWCSignAmino) => {
  const result = await client.request({
    topic: sessionTopic,
    chainId: `cosmos:${chainId}`,
    request: {
      method: 'cosmos_signAmino',
      params: {
        signerAddress,
        signDoc: {
          chain_id: chainId,
          memo,
          msgs,
          fee,
        },
      },
    },
  });
  return result;
};

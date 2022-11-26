import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSwap {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public sentAsset: {
    symbol: string;
  };

  public receivedAsset: {
    symbol: string;
  };

  public sentAmount: string;

  public minReceivingAmount: string;

  public receivedAmount: string;

  constructor(payload: object) {
    this.category = 'clp';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.sentAsset = R.pathOr({ symbol: '' }, ['sentAsset'], payload);
    this.receivedAsset = R.pathOr({ symbol: '' }, ['receivedAsset'], payload);
    this.sentAmount = R.pathOr('', ['sentAmount'], payload);
    this.minReceivingAmount = R.pathOr('', ['minReceivingAmount'], payload);
    this.receivedAmount = R.pathOr('', ['receivedAmount'], payload);
  }

  static getReceivedAmount(log: {
    events: Array<{ type: string; attributes: Array<{ key: string; value: string }> }>;
  }): string {
    const swapEvents = log?.events ?? [].filter((x) => x.type === 'swap_successful');
    const amount = swapEvents?.[0]?.attributes?.filter((x) => x.key === 'swap_amount') ?? [];
    return amount?.[0]?.value ?? '0';
  }

  static fromJson(
    json: {
      '@type': string;
      signer: string;
      sent_asset: { symbol: string };
      received_asset: { symbol: string };
      sent_amount: string;
      min_receiving_amount: string;
    },
    log: {
      events: Array<{ type: string; attributes: Array<{ key: string }> }>;
    }
  ): MsgSwap {
    return {
      category: 'clp',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      sentAsset: {
        symbol: R.pathOr('', ['sent_asset', 'symbol'], json),
      },
      receivedAsset: {
        symbol: R.pathOr('', ['received_asset', 'symbol'], json),
      },
      sentAmount: R.pathOr('0', ['sent_amount'], json),
      minReceivingAmount: R.pathOr('0', ['min_receiving_amount'], json),
      receivedAmount: this.getReceivedAmount(log),
    };
  }
}

export default MsgSwap;

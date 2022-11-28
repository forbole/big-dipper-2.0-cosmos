import type { Categories, Log } from '@/models/msg/types';
import * as R from 'ramda';

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

  static getReceivedAmount(log?: { events: Array<Log> }): string {
    const swapEvents =
      log?.events ?? [].filter((x) => R.pathOr<string>('', ['type'], x) === 'swap_successful');
    const amount =
      R.pathOr([], [0, 'attributes'], swapEvents)?.filter(
        (x) => R.pathOr<string>('', ['key'], x) === 'swap_amount'
      ) ?? [];
    return R.pathOr('0', [0, 'value'], amount);
  }

  static fromJson(
    json: object,
    log?: {
      events: Array<Log>;
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

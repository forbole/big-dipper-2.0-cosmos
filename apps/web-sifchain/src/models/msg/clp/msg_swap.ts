import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSwap {
  public category: Categories;

  public type: string;

  public json: any;

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

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
    this.sentAsset = payload.sentAsset;
    this.receivedAsset = payload.receivedAsset;
    this.sentAmount = payload.sentAmount;
    this.minReceivingAmount = payload.minReceivingAmount;
    this.receivedAmount = payload.receivedAmount;
  }

  static getReceivedAmount(log: any): string {
    const swapEvents = R.pathOr([], ['events'], log).filter(
      (x: any) => x.type === 'swap_successful'
    );
    const amount = R.pathOr([], [0, 'attributes'], swapEvents).filter(
      (x: any) => x.key === 'swap_amount'
    );
    return R.pathOr('0', [0, 'value'], amount);
  }

  static fromJson(json: any, log?: any): MsgSwap {
    return {
      category: 'clp',
      json,
      type: json['@type'],
      signer: json.signer,
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

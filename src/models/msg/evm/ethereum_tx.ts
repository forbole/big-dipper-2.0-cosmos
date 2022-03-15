import * as R from 'ramda';
import { Categories } from '../types';

// EthereumTx defines a method submitting Ethereum transactions.
class MsgEthereumTx {
  public category: Categories;
  public type: string;
  public json: any;
  // public coin: MsgCoin;
  // public receiver: string;
  // public sender: string;

  constructor(payload: any) {
    this.category = 'evm';
    this.type = payload.type;
    this.json = payload.json;
    // this.coin = payload.coin;
    // this.receiver = payload.receiver; // hex
    // this.sender = payload.sender; // bech32
  }

  static fromJson(json: any) {
    return new MsgEthereumTx({
      json,
      type: json['@type'],
      // coin: {
      //   denom: R.pathOr('', ['coin', 'denom'], json),
      //   amount: R.pathOr('0', ['coin', 'amount'], json),
      // },
      // receiver: json.receiver,
      // sender: json.sender,
    });
  }
}

export default MsgEthereumTx;

import * as R from 'ramda';
import { Categories } from '../types';

// ConvertCoin mints a ERC20 representation of the SDK Coin denom that is
// registered on the token mapping.
class MsgConvertCoin {
  public category: Categories;
  public type: string;
  public json: any;
  public coin: MsgCoin;
  public receiver: string;
  public sender: string;

  constructor(payload: any) {
    this.category = 'erc20';
    this.type = payload.type;
    this.json = payload.json;
    this.coin = payload.coin;
    this.receiver = payload.receiver; // hex
    this.sender = payload.sender; // bech32
  }

  static fromJson(json: any): MsgConvertCoin {
    return {
      category: 'erc20',
      json,
      type: json['@type'],
      coin: {
        denom: R.pathOr('', ['coin', 'denom'], json),
        amount: R.pathOr('0', ['coin', 'amount'], json),
      },
      receiver: json.receiver,
      sender: json.sender,
    };
  }
}

export default MsgConvertCoin;

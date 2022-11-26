import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

// ConvertCoin mints a ERC20 representation of the SDK Coin denom that is
// registered on the token mapping.
class MsgConvertCoin {
  public category: Categories;

  public type: string;

  public json: object;

  public coin: MsgCoin;

  public receiver: string;

  public sender: string;

  constructor(payload: object) {
    this.category = 'erc20';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.coin = R.pathOr({ denom: '', amount: '0' }, ['coin'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload); // hex
    this.sender = R.pathOr('', ['sender'], payload); // bech32
  }

  static fromJson(json: object): MsgConvertCoin {
    return {
      category: 'erc20',
      json,
      type: R.pathOr('', ['@type'], json),
      coin: R.pathOr({ denom: '', amount: '0' }, ['coin', 'denom'], json),
      receiver: R.pathOr('', ['receiver'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgConvertCoin;

import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

// ConvertERC20 mints a Cosmos coin representation of the ERC20 token contract
// that is registered on the token mapping.
class MsgConvertErc20 {
  public category: Categories;

  public type: string;

  public json: object;

  public contractAddress: string;

  public amount: string;

  public receiver: string;

  public sender: string;

  constructor(payload: object) {
    this.category = 'erc20';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.contractAddress = R.pathOr('', ['contractAddress'], payload);
    this.amount = R.pathOr('', ['amount'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload); // bech21
    this.sender = R.pathOr('', ['sender'], payload); // hex
  }

  static fromJson(json: object): MsgConvertErc20 {
    return {
      category: 'erc20',
      json,
      type: R.pathOr('', ['@type'], json),
      contractAddress: R.pathOr('', ['contract_address'], json),
      amount: R.pathOr('', ['amount'], json),
      receiver: R.pathOr('', ['receiver'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgConvertErc20;

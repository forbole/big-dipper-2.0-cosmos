import * as R from 'ramda';
import { Categories } from '../types';

// ConvertERC20 mints a Cosmos coin representation of the ERC20 token contract
// that is registered on the token mapping.
class MsgConvertErc20 {
  public category: Categories;
  public type: string;
  public json: any;
  public contractAddress: string;
  public amount: string;
  public receiver: string;
  public sender: string;

  constructor(payload: any) {
    this.category = 'erc20';
    this.type = payload.type;
    this.json = payload.json;
    this.contractAddress = payload.contractAddress;
    this.amount = payload.amount;
    this.receiver = payload.receiver; // bech21
    this.sender = payload.sender; // hex
  }

  static fromJson(json: any): MsgConvertErc20 {
    return {
      category: 'erc20',
      json,
      type: json['@type'],
      contractAddress: R.pathOr('', ['contract_address'], json),
      amount: R.pathOr('', ['amount'], json),
      receiver: json.receiver,
      sender: json.sender,
    };
  }
}

export default MsgConvertErc20;

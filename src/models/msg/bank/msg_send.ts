import numeral from 'numeral';
import { Categories } from '../types';

class MsgSend {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public toAddress: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.toAddress = payload.toAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSend({
      json,
      type: json['@type'],
      fromAddress: json.from_address,
      toAddress: json.to_address,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }),
    });
  }
}

export default MsgSend;

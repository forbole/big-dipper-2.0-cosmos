import numeral from 'numeral';
import { Categories } from '../types';

type Coins = {
  denom: string;
  amount: number | string;
}

class MsgMultiSend {
  public category: Categories;
  public type: string;
  public inputs: {
    address: string;
    coins: Coins[],
  }[];
  public outputs: {
    address: string;
    coins: Coins[],
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.inputs = payload.inputs;
    this.outputs = payload.outputs;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgMultiSend({
      json,
      type: json['@type'],
      inputs: json.inputs?.map((input) => {
        return ({
          address: input?.address,
          coins: input?.coins?.map((coin) => {
            return ({
              denom: coin?.denom,
              amount: numeral(coin?.amount).value(),
            });
          }),
        });
      }),
      outputs: json.outputs?.map((output) => {
        return ({
          address: output?.address,
          coins: output?.coins?.map((coin) => {
            return ({
              denom: coin?.denom,
              amount: numeral(coin?.amount).value(),
            });
          }),
        });
      }),
    });
  }
}

export default MsgMultiSend;

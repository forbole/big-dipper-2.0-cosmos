import * as R from 'ramda';
import type { Categories } from '../types';

class MsgMultiSend {
  public category: Categories;
  public type: string;
  public inputs: {
    address: string;
    coins: MsgCoin[];
  }[];
  public outputs: {
    address: string;
    coins: MsgCoin[];
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.inputs = payload.inputs;
    this.outputs = payload.outputs;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgMultiSend {
    return {
      category: 'bank',
      json,
      type: json['@type'],
      inputs: json.inputs?.map(
        (input?: { address?: string; coins?: Array<{ denom?: string }> }) => {
          return {
            address: input?.address,
            coins: input?.coins?.map((coin) => {
              return {
                denom: coin?.denom,
                amount: R.pathOr('0', ['amount'], coin),
              };
            }),
          };
        }
      ),
      outputs: json.outputs?.map(
        (output?: { address: string; coins?: Array<{ denom?: string }> }) => {
          return {
            address: output?.address,
            coins: output?.coins?.map((coin) => {
              return {
                denom: coin?.denom,
                amount: R.pathOr('0', ['amount'], coin),
              };
            }),
          };
        }
      ),
    };
  }
}

export default MsgMultiSend;

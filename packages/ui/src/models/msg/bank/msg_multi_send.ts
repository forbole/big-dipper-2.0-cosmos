import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMultiSend {
  public category: Categories;

  public type: string;

  public inputs: Array<{
    address: string;
    coins: MsgCoin[];
  }>;

  public outputs: Array<{
    address: string;
    coins: MsgCoin[];
  }>;

  public json: object;

  constructor(payload: object) {
    this.category = 'bank';
    this.type = R.pathOr('', ['type'], payload);
    this.inputs = R.pathOr([], ['inputs'], payload);
    this.outputs = R.pathOr([], ['outputs'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgMultiSend {
    return {
      category: 'bank',
      json,
      type: R.pathOr('', ['@type'], json),
      inputs: R.pathOr<Array<{ address?: string; coins?: MsgCoin[] }>>([], ['inputs'], json).map(
        (input) => ({
          address: R.pathOr('', ['address'], input),
          coins:
            input?.coins?.map((coin) => ({
              denom: R.pathOr('', ['denom'], coin),
              amount: R.pathOr('0', ['amount'], coin),
            })) ?? [],
        })
      ),
      outputs: R.pathOr([], ['outputs'], json).map(
        (output?: { address: string; coins?: MsgCoin[] }) => ({
          address: output?.address ?? '',
          coins:
            output?.coins?.map((coin) => ({
              denom: coin?.denom ?? '',
              amount: coin?.amount ?? '0',
            })) ?? [],
        })
      ),
    };
  }
}

export default MsgMultiSend;

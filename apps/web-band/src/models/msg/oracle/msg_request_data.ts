import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRequestData {
  public category: Categories;

  public type: string;

  public json: object;

  public oracleScriptId: number;

  // public calldata: object;
  // public askCount: number;
  // public minCount: number;
  // public clientId: string;
  // public feeLimit: MsgCoin[];
  // public prepareGas: number;
  // public executeGas: number;
  public sender: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.oracleScriptId = R.pathOr(0, ['oracleScriptId'], payload);
    // this.calldata = R.pathOr('', ['calldata'], payload);
    // this.askCount = R.pathOr('', ['askCount'], payload);
    // this.minCount = R.pathOr('', ['minCount'], payload);
    // this.clientId = R.pathOr('', ['clientId'], payload);
    // this.feeLimit = R.pathOr('', ['feeLimit'], payload);
    // this.prepareGas = R.pathOr('', ['prepareGas'], payload);
    // this.executeGas = R.pathOr('', ['executeGas'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
  }

  static fromJson(json: object): MsgRequestData {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      oracleScriptId: R.pathOr(0, ['oracle_script_id'], json),
      // calldata: R.pathOr('', ['calldata'], json),
      // askCount: R.pathOr(0, ['ask_count'], json),
      // minCount: R.pathOr(0, ['min_count'], json),
      // clientId: R.pathOr('', ['client_id'], json),
      // feeLimit: R.pathOr<MsgRequestData['feeLimit']>([], ['fee_limit'], json).map((x) => ({
      //   denom: x.denom,
      //   amount: x?.amount ?? 0,
      // })),
      // prepareGas: R.pathOr(0, ['prepare_gas'], json),
      // executeGas: R.pathOr(0, ['executeGas'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgRequestData;

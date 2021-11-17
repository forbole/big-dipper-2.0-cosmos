import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateEthBridgeClaim {
  public category: Categories;
  public type: string;
  public json: any;
  public ethBridgeClaim: {
    cosmosreceiver: string;
  }

  constructor(payload: any) {
    this.category = 'ethbridge';
    this.type = payload.type;
    this.json = payload.json;
    this.ethBridgeClaim = payload.ethBridgeClaim;
  }

  static fromJson(json: any) {
    return new MsgCreateEthBridgeClaim({
      json,
      type: json['@type'],
      ethBridgeClaim: {
        cosmosreceiver: R.pathOr('', ['eth_bridge_claim', 'cosmos_receiver'], json),
      },
    });
  }
}

export default MsgCreateEthBridgeClaim;

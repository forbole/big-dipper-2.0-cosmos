import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateEthBridgeClaim {
  public category: Categories;
  public type: string;
  public json: any;
  public ethBridgeClaim: {
    cosmosreceiver: string;
    claimType: 'CLAIM_TYPE_UNSPECIFIED' | 'CLAIM_TYPE_BURN' | 'CLAIM_TYPE_LOCK';
  };

  constructor(payload: any) {
    this.category = 'ethbridge';
    this.type = payload.type;
    this.json = payload.json;
    this.ethBridgeClaim = payload.ethBridgeClaim;
  }

  static fromJson(json: any): MsgCreateEthBridgeClaim {
    return {
      category: 'ethbridge',
      json,
      type: json['@type'],
      ethBridgeClaim: {
        cosmosreceiver: R.pathOr('', ['eth_bridge_claim', 'cosmos_receiver'], json),
        claimType: R.pathOr('CLAIM_TYPE_UNSPECIFIED', ['eth_bridge_claim', 'claim_type'], json),
      },
    };
  }
}

export default MsgCreateEthBridgeClaim;

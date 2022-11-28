import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgCreateEthBridgeClaim {
  public category: Categories;

  public type: string;

  public json: object;

  public ethBridgeClaim: {
    cosmosreceiver: string;
    claimType: 'CLAIM_TYPE_UNSPECIFIED' | 'CLAIM_TYPE_BURN' | 'CLAIM_TYPE_LOCK';
  };

  constructor(payload: object) {
    this.category = 'ethbridge';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.ethBridgeClaim = R.pathOr(
      {
        cosmosreceiver: '',
        claimType: 'CLAIM_TYPE_UNSPECIFIED',
      },
      ['ethBridgeClaim'],
      payload
    );
  }

  static fromJson(json: object): MsgCreateEthBridgeClaim {
    return {
      category: 'ethbridge',
      json,
      type: R.pathOr('', ['@type'], json),
      ethBridgeClaim: R.pathOr(
        {
          cosmosreceiver: '',
          claimType: 'CLAIM_TYPE_UNSPECIFIED',
        },
        ['eth_bridge_claim', 'cosmos_receiver'],
        json
      ),
    };
  }
}

export default MsgCreateEthBridgeClaim;

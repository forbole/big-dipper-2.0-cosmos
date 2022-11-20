import numeral from 'numeral';
import type { Categories } from '../types';

class MsgEditValidator {
  public category: Categories;

  public type: string;

  public description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  };

  public validatorAddress: string;

  public commissionRate: string | number;

  public minSelfDelegation: string | number;

  public json: any;

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.description = payload.description;
    this.validatorAddress = payload.validatorAddress;
    this.commissionRate = payload.commissionRate;
    this.minSelfDelegation = payload.minSelfDelegation;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgEditValidator {
    return {
      category: 'staking',
      json,
      type: json['@type'],
      description: {
        moniker: json?.description?.moniker,
        identity: json?.description?.identity,
        website: json?.description?.website,
        securityContact: json?.description?.security_contact,
        details: json?.description?.details,
      },
      validatorAddress: json.validator_address,
      commissionRate: numeral(json.commission_rate ?? 0).value() ?? 0,
      minSelfDelegation: numeral(json?.min_self_delegation ?? 0).value() ?? 0,
    };
  }
}

export default MsgEditValidator;

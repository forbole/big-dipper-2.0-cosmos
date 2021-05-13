import numeral from 'numeral';
import { Categories } from '../types';

class MsgCreateValidator {
  public category: Categories;
  public type: string;
  public description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  }
  public commission: {
    rate: string | number;
    maxRate: string | number;
    maxChangeRate: string | number;
  }
  public minSelfDelegation: string | number;
  public delegatorAddress: string;
  public validatorAddress: string;
  public pubkey: {
    type: string;
    key: string;
  }
  public value: {
    denom: string;
    amount: string | number;
  }
  public json: any;

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.description = payload.description;
    this.commission = payload.commission;
    this.minSelfDelegation = payload.minSelfDelegation;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.pubkey = payload.pubkey;
    this.value = payload.value;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgCreateValidator({
      json,
      type: json['@type'],
      description: {
        moniker: json?.description?.moniker,
        identity: json?.description?.identity,
        website: json?.description?.website,
        securityContact: json?.description?.security_contact,
        details: json?.description?.details,
      },
      commission: {
        rate: numeral(json?.commission?.rate).value(),
        maxRate: numeral(json?.commission?.max_rate).value(),
        maxChangeRate: numeral(json?.commission?.max_change_rate).value(),
      },
      minSelfDelegation: json?.min_self_delegation,
      delegatorAddress: json?.delegator_address,
      validatorAddress: json.validator_address,
      pubkey: {
        type: json?.pubkey?.['@type'],
        key: json?.pubkey?.key,
      },
      value: {
        denom: json?.value?.denom,
        amount: numeral(json?.value?.amount).value(),
      },
    });
  }
}

export default MsgCreateValidator;

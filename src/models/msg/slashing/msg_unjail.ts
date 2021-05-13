import { Categories } from '../types';

class MsgUnjail {
  public category: Categories;
  public type: string;
  public validatorAddress: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'slashing';
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgUnjail({
      json,
      type: json['@type'],
      validatorAddress: json.validator_addr,
    });
  }
}

export default MsgUnjail;

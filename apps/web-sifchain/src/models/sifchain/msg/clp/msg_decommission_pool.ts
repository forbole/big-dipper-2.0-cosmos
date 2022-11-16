import type { Categories } from '../types';

class MsgDecommissionPool {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;
  public symbol: string;

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
    this.symbol = payload.symbol;
  }

  static fromJson(json: any): MsgDecommissionPool {
    return {
      category: 'clp',
      json,
      type: json['@type'],
      signer: json.signer,
      symbol: json.symbol,
    };
  }
}

export default MsgDecommissionPool;

import { Categories } from '../types';

// hash reference 22CEA2FDEE40DAC1A5BEBDA00D7FAEDF994CE2D2C79E5315F310C07704C90BB3

class MsgRemoveLiquidity {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
  }

  static fromJson(json: any) {
    return new MsgRemoveLiquidity({
      json,
      type: json['@type'],
      signer: json.signer,
    });
  }
}

export default MsgRemoveLiquidity;

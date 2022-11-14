import { Categories } from '../types';

class MsgBurnNFT {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public id: string;

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.id = payload.id;
  }

  static fromJson(json: any): MsgBurnNFT {
    return {
      category: 'nft',
      json,
      type: json['@type'],
      sender: json?.sender,
      id: json?.id,
    };
  }
}

export default MsgBurnNFT;

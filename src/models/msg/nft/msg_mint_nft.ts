import { Categories } from '../types';

class MsgMintNFT {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public name: string;

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.name = payload.name;
  }

  static fromJson(json: any) {
    return new MsgMintNFT({
      json,
      type: json['@type'],
      sender: json?.sender,
      name: json?.name,
    });
  }
}

export default MsgMintNFT;

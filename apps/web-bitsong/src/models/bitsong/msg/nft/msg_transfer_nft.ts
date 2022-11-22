import type { Categories } from '../types';

class MsgTransferNFT {
  public category: Categories;

  public type: string;

  public json: any;

  public sender: string;

  public id: string;

  public recipient: string;

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.id = payload.id;
    this.recipient = payload.recipient;
  }

  static fromJson(json: any): MsgTransferNFT {
    return {
      category: 'nft',
      json,
      type: json['@type'],
      sender: json?.sender,
      id: json?.id,
      recipient: json?.recipient,
    };
  }
}

export default MsgTransferNFT;

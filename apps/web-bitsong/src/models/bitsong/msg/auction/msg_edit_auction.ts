import { Categories } from '../types';

class MsgEditAuction {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public id: number;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.id = payload.id;
  }

  static fromJson(json: any): MsgEditAuction {
    return {
      category: 'auction',
      json,
      type: json['@type'],
      owner: json.owner,
      id: json.id,
    };
  }
}

export default MsgEditAuction;

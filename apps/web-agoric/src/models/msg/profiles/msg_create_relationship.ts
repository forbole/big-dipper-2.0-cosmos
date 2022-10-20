import { Categories } from '../types';

class MsgCreateRelationship {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public receiver: string;
  public subspace: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.receiver = payload.receiver;
    this.subspace = payload.subspace;
  }

  static fromJson(json: any) {
    return new MsgCreateRelationship({
      json,
      type: json['@type'],
      sender: json.sender,
      receiver: json.receiver,
      subspace: json.subspace,
    });
  }
}

export default MsgCreateRelationship;

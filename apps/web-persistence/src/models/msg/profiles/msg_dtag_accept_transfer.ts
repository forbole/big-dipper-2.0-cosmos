import { Categories } from '../types';

class MsgDtagAcceptTransfer {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public receiver: string;
  public newDtag: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.receiver = payload.receiver;
    this.newDtag = payload.newDtag;
  }

  static fromJson(json: any) {
    return new MsgDtagAcceptTransfer({
      json,
      type: json['@type'],
      sender: json.sender,
      receiver: json.receiver,
      newDtag: json.new_dtag,
    });
  }
}

export default MsgDtagAcceptTransfer;

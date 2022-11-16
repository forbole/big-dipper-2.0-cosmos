import * as R from 'ramda';
import type { Categories } from '../types';

class MsgLinkApplication {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public linkData: {
    application: string;
    username: string;
  };

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.linkData = payload.linkData;
  }

  static fromJson(json: any): MsgLinkApplication {
    return {
      category: 'profiles',
      json,
      type: json['@type'],
      sender: json.sender,
      linkData: {
        application: R.pathOr('', ['link_data', 'application'], json),
        username: R.pathOr('', ['link_data', 'username'], json),
      },
    };
  }
}

export default MsgLinkApplication;

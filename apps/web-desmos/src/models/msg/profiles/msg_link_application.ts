import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgLinkApplication {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public linkData: {
    application: string;
    username: string;
  };

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.linkData = R.pathOr(
      {
        application: '',
        username: '',
      },
      ['linkData'],
      payload
    );
  }

  static fromJson(json: object): MsgLinkApplication {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      linkData: {
        application: R.pathOr('', ['link_data', 'application'], json),
        username: R.pathOr('', ['link_data', 'username'], json),
      },
    };
  }
}

export default MsgLinkApplication;

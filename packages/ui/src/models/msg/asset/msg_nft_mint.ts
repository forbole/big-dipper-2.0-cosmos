/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgNftMint {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public class_id: string;
  public id: string;
  public uri: string;
  public uri_hash: string;
  public data: any;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.class_id = R.pathOr('', ['class_id'], payload);
    this.id = R.pathOr('', ['id'], payload);
    this.uri = R.pathOr('', ['uri'], payload);
    this.uri_hash = R.pathOr('', ['uri_hash'], payload);
    this.data = R.pathOr({}, ['data'], payload);
  }

  static fromJson(json: any) {
    return new MsgNftMint({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      class_id: R.pathOr('', ['class_id'], json),
      id: R.pathOr('', ['id'], json),
      uri: R.pathOr('', ['uri'], json),
      uri_hash: R.pathOr('', ['uri_hash'], json),
      data: R.pathOr({}, ['data'], json),
    });
  }
}

export default MsgNftMint;

import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateOracleScript {
  public category: Categories;

  public type: string;

  public json: object;

  public name: string;

  public description: string;

  public schema: string;

  public sourceCodeUrl: string;

  public code: object;

  public owner: string;

  public sender: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.name = R.pathOr('', ['name'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.schema = R.pathOr('', ['schema'], payload);
    this.sourceCodeUrl = R.pathOr('', ['sourceCodeUrl'], payload);
    this.code = R.pathOr({}, ['code'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
  }

  static fromJson(json: object): MsgCreateOracleScript {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      name: R.pathOr('', ['name'], json),
      description: R.pathOr('', ['description'], json),
      schema: R.pathOr('', ['schema'], json),
      sourceCodeUrl: R.pathOr('', ['source_code_url'], json),
      code: R.pathOr({}, ['code'], json),
      owner: R.pathOr('', ['owner'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgCreateOracleScript;

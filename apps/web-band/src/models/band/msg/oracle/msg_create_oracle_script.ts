import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateOracleScript {
  public category: Categories;
  public type: string;
  public json: any;
  public name: string;
  public description: string;
  public schema: string;
  public sourceCodeUrl: string;
  public code: JSON;
  public owner: string;
  public sender: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.name = payload.name;
    this.description = payload.description;
    this.schema = payload.schema;
    this.sourceCodeUrl = payload.sourceCodeUrl;
    this.code = payload.code;
    this.owner = payload.owner;
    this.sender = payload.sender;
  }

  static fromJson(json: any): MsgCreateOracleScript {
    return {
      category: 'oracle',
      json,
      type: json['@type'],
      name: json.name,
      description: json.description,
      schema: json.schema,
      sourceCodeUrl: R.pathOr('', ['source_code_url'], json),
      code: R.pathOr('', ['code'], json) as unknown as JSON,
      owner: json.owner,
      sender: json.sender,
    };
  }
}

export default MsgCreateOracleScript;

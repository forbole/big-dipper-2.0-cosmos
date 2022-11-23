import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditOracleScript {
  public category: Categories;

  public type: string;

  public json: any;

  public oracleScriptId: number;

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
    this.oracleScriptId = payload.oracleScriptId;
    this.name = payload.name;
    this.description = payload.description;
    this.schema = payload.schema;
    this.sourceCodeUrl = payload.sourceCodeUrl;
    this.code = payload.code;
    this.owner = payload.owner;
    this.sender = payload.sender;
  }

  static fromJson(json: any): MsgEditOracleScript {
    return {
      category: 'oracle',
      json,
      type: json['@type'],
      oracleScriptId: R.pathOr(0, ['oracle_script_id'], json),
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

export default MsgEditOracleScript;

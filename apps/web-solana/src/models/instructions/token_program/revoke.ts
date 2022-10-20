import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramRevoke extends InstructionBase {
  public source: string;
  public owner: string;

  constructor(payload: any) {
    super(payload);
    this.source = payload.source;
    this.owner = payload.owner;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramRevoke({
      ...defaultItems,
      source: R.pathOr('', ['value', 'source'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
    });
  }
}

export default TokenProgramRevoke;

import { InstructionBase } from '@models';
import * as R from 'ramda';

class InstructionCreateAccount extends InstructionBase {
  public source: string;
  public newAccount: string;
  public lamports: number;
  public space: number;
  public owner: string;

  constructor(payload: any) {
    super(payload);
    this.source = payload.source;
    this.newAccount = payload.newAccount;
    this.lamports = payload.lamports;
    this.space = payload.space;
    this.owner = payload.owner;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new InstructionCreateAccount({
      ...defaultItems,
      source: R.pathOr('', ['value', 'source'], json),
      newAccount: R.pathOr('', ['value', 'newAccount'], json),
      lamports: R.pathOr(0, ['value', 'lamports'], json),
      space: R.pathOr(0, ['value', 'space'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
    });
  }
}

export default InstructionCreateAccount;

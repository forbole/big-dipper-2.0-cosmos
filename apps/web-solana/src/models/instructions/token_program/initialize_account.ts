import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramInitializeAccount extends InstructionBase {
  public mint: string;
  public owner: string;
  public account: string;
  public rentSysvar: string;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.owner = payload.owner;
    this.account = payload.account;
    this.rentSysvar = payload.rentSysvar;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramInitializeAccount({
      ...defaultItems,
      mint: R.pathOr('', ['value', 'mint'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
      account: R.pathOr('', ['value', 'account'], json),
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
    });
  }
}

export default TokenProgramInitializeAccount;

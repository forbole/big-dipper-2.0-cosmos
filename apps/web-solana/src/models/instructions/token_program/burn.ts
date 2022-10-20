import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramBurn extends InstructionBase {
  public mint: string;
  public amount: string;
  public account: string;
  public authority: string;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.amount = payload.amount;
    this.account = payload.account;
    this.authority = payload.authority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramBurn({
      ...defaultItems,
      mint: R.pathOr('', ['value', 'mint'], json),
      amount: R.pathOr('0', ['value', 'amount'], json),
      account: R.pathOr('', ['value', 'account'], json),
      authority: R.pathOr('', ['value', 'authority'], json),
    });
  }
}

export default TokenProgramBurn;

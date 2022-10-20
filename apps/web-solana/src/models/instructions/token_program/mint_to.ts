import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramMintTo extends InstructionBase {
  public mint: string;
  public amount: string;
  public account: string;
  public mintAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.amount = payload.amount;
    this.account = payload.account;
    this.mintAuthority = payload.mintAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramMintTo({
      ...defaultItems,
      mint: R.pathOr('', ['value', 'mint'], json),
      amount: R.pathOr('0', ['value', 'amount'], json),
      account: R.pathOr('', ['value', 'account'], json),
      mintAuthority: R.pathOr('', ['value', 'mintAuthority'], json),
    });
  }
}

export default TokenProgramMintTo;

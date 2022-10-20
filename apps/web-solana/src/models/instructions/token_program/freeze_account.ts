import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramFreezeAccount extends InstructionBase {
  public mint: string;
  public account: string;
  public signers: string[];
  public multisigFreezeAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.account = payload.account;
    this.signers = payload.signers;
    this.multisigFreezeAuthority = payload.multisigFreezeAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramFreezeAccount({
      ...defaultItems,
      mint: R.pathOr('', ['value', 'mint'], json),
      account: R.pathOr('', ['value', 'account'], json),
      signers: R.pathOr([], ['value', 'signers'], json),
      multisigFreezeAuthority: R.pathOr('', ['value', 'multisigFreezeAuthority'], json),
    });
  }
}

export default TokenProgramFreezeAccount;

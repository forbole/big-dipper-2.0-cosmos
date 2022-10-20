import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramAdvancedNonce extends InstructionBase {
  public nonceAccount: string;
  public nonceAuthority: string;
  public recentBlockhashesSysvar: string;

  constructor(payload: any) {
    super(payload);
    this.nonceAccount = payload.nonceAccount;
    this.nonceAuthority = payload.nonceAuthority;
    this.recentBlockhashesSysvar = payload.recentBlockhashesSysvar;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramAdvancedNonce({
      ...defaultItems,
      nonceAccount: R.pathOr('', ['value', 'nonceAccount'], json),
      nonceAuthority: R.pathOr('', ['value', 'nonceAuthority'], json),
      recentBlockhashesSysvar: R.pathOr('', ['value', 'recentBlockhashesSysvar'], json),
    });
  }
}

export default SystemProgramAdvancedNonce;

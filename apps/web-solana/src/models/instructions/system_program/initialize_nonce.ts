import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramInitializeNonce extends InstructionBase {
  public rentSysvar: string;
  public nonceAccount: string;
  public nonceAuthority: string;
  public recentBlockhashesSysvar: string;

  constructor(payload: any) {
    super(payload);
    this.rentSysvar = payload.rentSysvar;
    this.nonceAccount = payload.nonceAccount;
    this.nonceAuthority = payload.nonceAuthority;
    this.recentBlockhashesSysvar = payload.recentBlockhashesSysvar;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramInitializeNonce({
      ...defaultItems,
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
      nonceAccount: R.pathOr('', ['value', 'nonceAccount'], json),
      nonceAuthority: R.pathOr('', ['value', 'nonceAuthority'], json),
      recentBlockhashesSysvar: R.pathOr('', ['value', 'recentBlockhashesSysvar'], json),
    });
  }
}

export default SystemProgramInitializeNonce;

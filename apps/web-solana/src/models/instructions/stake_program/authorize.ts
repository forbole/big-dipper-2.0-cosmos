import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramAuthorize extends InstructionBase {
  public authority: string;
  public clockSysvar: string;
  public newAuthority: string;
  public stakeAccount: string;
  public authorityType: string;

  constructor(payload: any) {
    super(payload);
    this.authority = payload.authority;
    this.clockSysvar = payload.clockSysvar;
    this.newAuthority = payload.newAuthority;
    this.stakeAccount = payload.stakeAccount;
    this.authorityType = payload.authorityType;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramAuthorize({
      ...defaultItems,
      authority: R.pathOr('', ['value', 'authority'], json),
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      newAuthority: R.pathOr('', ['value', 'newAuthority'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
      authorityType: R.pathOr('', ['value', 'authorityType'], json),
    });
  }
}

export default StakeProgramAuthorize;

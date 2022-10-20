import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramDeactivate extends InstructionBase {
  public clockSysvar: string;
  public stakeAccount: string;
  public stakeAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.clockSysvar = payload.clockSysvar;
    this.stakeAccount = payload.stakeAccount;
    this.stakeAuthority = payload.stakeAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramDeactivate({
      ...defaultItems,
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
      stakeAuthority: R.pathOr('', ['value', 'stakeAuthority'], json),
    });
  }
}

export default StakeProgramDeactivate;

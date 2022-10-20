import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramDelegate extends InstructionBase {
  public clockSysvar: string;
  public voteAccount: string;
  public stakeAccount: string;
  public stakeAuthority: string;
  public stakeConfigAccount: string;
  public stakeHistorySysvar: string;

  constructor(payload: any) {
    super(payload);
    this.clockSysvar = payload.clockSysvar;
    this.voteAccount = payload.voteAccount;
    this.stakeAccount = payload.stakeAccount;
    this.stakeAuthority = payload.stakeAuthority;
    this.stakeConfigAccount = payload.stakeConfigAccount;
    this.stakeHistorySysvar = payload.stakeHistorySysvar;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramDelegate({
      ...defaultItems,
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
      stakeAuthority: R.pathOr('', ['value', 'stakeAuthority'], json),
      stakeConfigAccount: R.pathOr('', ['value', 'stakeConfigAccount'], json),
      stakeHistorySysvar: R.pathOr('', ['value', 'stakeHistorySysvar'], json),
    });
  }
}

export default StakeProgramDelegate;

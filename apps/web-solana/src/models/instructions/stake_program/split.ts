import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramSplit extends InstructionBase {
  public lamports: number;
  public stakeAccount: string;
  public stakeAuthority: string;
  public newSplitAccount: string;

  constructor(payload: any) {
    super(payload);
    this.lamports = payload.lamports;
    this.stakeAccount = payload.stakeAccount;
    this.stakeAuthority = payload.stakeAuthority;
    this.newSplitAccount = payload.newSplitAccount;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramSplit({
      ...defaultItems,
      lamports: R.pathOr(0, ['value', 'lamports'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
      stakeAuthority: R.pathOr('', ['value', 'stakeAuthority'], json),
      newSplitAccount: R.pathOr('', ['value', 'newSplitAccount'], json),
    });
  }
}

export default StakeProgramSplit;

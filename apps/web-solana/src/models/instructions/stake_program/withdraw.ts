import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramWithdraw extends InstructionBase {
  public lamports: number;
  public custodian: string;
  public clockSysvar: string;
  public destination: string;
  public stakeAccount: string;
  public withdrawAuthority: string;
  public stakeHistorySysvar: string;

  constructor(payload: any) {
    super(payload);
    this.lamports = payload.lamports;
    this.custodian = payload.custodian;
    this.clockSysvar = payload.clockSysvar;
    this.destination = payload.destination;
    this.stakeAccount = payload.stakeAccount;
    this.withdrawAuthority = payload.withdrawAuthority;
    this.stakeHistorySysvar = payload.stakeHistorySysvar;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramWithdraw({
      ...defaultItems,
      lamports: R.pathOr(0, ['value', 'lamports'], json),
      custodian: R.pathOr('', ['value', 'custodian'], json),
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      destination: R.pathOr('', ['value', 'destination'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
      withdrawAuthority: R.pathOr('', ['value', 'withdrawAuthority'], json),
      stakeHistorySysvar: R.pathOr('', ['value', 'stakeHistorySysvar'], json),
    });
  }
}

export default StakeProgramWithdraw;

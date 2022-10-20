import { InstructionBase } from '@models';
import * as R from 'ramda';

class StakeProgramInitialize extends InstructionBase {
  public epoch: number;
  public custodian: string;
  public staker: string;
  public withdrawer: string;
  public rentSysvar: string;
  public stakeAccount: string;

  constructor(payload: any) {
    super(payload);
    this.epoch = payload.epoch;
    this.custodian = payload.custodian;
    this.staker = payload.staker;
    this.withdrawer = payload.withdrawer;
    this.rentSysvar = payload.rentSysvar;
    this.stakeAccount = payload.stakeAccount;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new StakeProgramInitialize({
      ...defaultItems,
      epoch: R.pathOr('', ['value', 'lockup', 'epoch'], json),
      custodian: R.pathOr('', ['value', 'lockup', 'custodian'], json),
      staker: R.pathOr('', ['value', 'authorized', 'staker'], json),
      withdrawer: R.pathOr('', ['value', 'authorized', 'withdrawer'], json),
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
      stakeAccount: R.pathOr('', ['value', 'stakeAccount'], json),
    });
  }
}

export default StakeProgramInitialize;

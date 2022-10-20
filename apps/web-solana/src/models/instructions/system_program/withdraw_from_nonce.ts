import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramWithdrawFromNonce extends InstructionBase {
  public nonceAccount: string;
  public destination: string;
  public recentBlockhashesSysvar: string;
  public rentSysvar: string;
  public nonceAuthority: string;
  public lamports: number;

  constructor(payload: any) {
    super(payload);
    this.nonceAccount = payload.nonceAccount;
    this.destination = payload.destination;
    this.recentBlockhashesSysvar = payload.recentBlockhashesSysvar;
    this.rentSysvar = payload.rentSysvar;
    this.nonceAuthority = payload.nonceAuthority;
    this.lamports = payload.lamports;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramWithdrawFromNonce({
      ...defaultItems,
      nonceAccount: R.pathOr('', ['value', 'nonceAccount'], json),
      destination: R.pathOr('', ['value', 'destination'], json),
      recentBlockhashesSysvar: R.pathOr('', ['value', 'recentBlockhashesSysvar'], json),
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
      nonceAuthority: R.pathOr('', ['value', 'nonceAuthority'], json),
      lamports: R.pathOr('', ['value', 'lamports'], json),
    });
  }
}

export default SystemProgramWithdrawFromNonce;

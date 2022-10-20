import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramWithdraw extends InstructionBase {
  public destination: string;
  public lamports: number;
  public voteAccount: string;
  public withdrawAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.destination = payload.destination;
    this.lamports = payload.lamports;
    this.voteAccount = payload.voteAccount;
    this.withdrawAuthority = payload.withdrawAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramWithdraw({
      ...defaultItems,
      destination: R.pathOr('', ['value', 'destination'], json),
      lamports: R.pathOr(0, ['value', 'lamports'], json),
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      withdrawAuthority: R.pathOr('', ['value', 'withdrawAuthority'], json),
    });
  }
}

export default VoteProgramWithdraw;

import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramUpdateCommission extends InstructionBase {
  public commission: number;
  public voteAccount: string;
  public withdrawAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.commission = payload.commission;
    this.voteAccount = payload.voteAccount;
    this.withdrawAuthority = payload.withdrawAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramUpdateCommission({
      ...defaultItems,
      commission: R.pathOr(0, ['value', 'commission'], json),
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      withdrawAuthority: R.pathOr('', ['value', 'withdrawAuthority'], json),
    });
  }
}

export default VoteProgramUpdateCommission;

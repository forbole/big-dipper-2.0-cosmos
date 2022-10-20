import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramInitializeAccount extends InstructionBase {
  public node: string;
  public commission: number;
  public rentSysvar: string;
  public clockSysvar: string;
  public voteAccount: string;
  public authorizedVoter: string;
  public authorizedWithdrawer: string;

  constructor(payload: any) {
    super(payload);
    this.node = payload.node;
    this.commission = payload.commission;
    this.rentSysvar = payload.rentSysvar;
    this.clockSysvar = payload.clockSysvar;
    this.voteAccount = payload.voteAccount;
    this.authorizedVoter = payload.authorizedVoter;
    this.authorizedWithdrawer = payload.authorizedWithdrawer;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramInitializeAccount({
      ...defaultItems,
      node: R.pathOr('', ['value', 'node'], json),
      commission: R.pathOr(0, ['value', 'commission'], json),
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      authorizedVoter: R.pathOr('', ['value', 'authorizedVoter'], json),
      authorizedWithdrawer: R.pathOr('', ['value', 'authorizedWithdrawer'], json),
    });
  }
}

export default VoteProgramInitializeAccount;

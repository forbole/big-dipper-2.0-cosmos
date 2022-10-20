import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramUpdateValidatorIdentity extends InstructionBase {
  public voteAccount: string;
  public newValidatorIdentity: string;
  public withdrawAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.voteAccount = payload.voteAccount;
    this.newValidatorIdentity = payload.newValidatorIdentity;
    this.withdrawAuthority = payload.withdrawAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramUpdateValidatorIdentity({
      ...defaultItems,
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      newValidatorIdentity: R.pathOr('', ['value', 'newValidatorIdentity'], json),
      withdrawAuthority: R.pathOr('', ['value', 'withdrawAuthority'], json),
    });
  }
}

export default VoteProgramUpdateValidatorIdentity;

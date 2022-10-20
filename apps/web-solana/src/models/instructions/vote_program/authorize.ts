import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramAuthorize extends InstructionBase {
  public voteAccount: string;
  public clockSysvar: string;
  public authority: string;
  public newAuthority: string;
  public authorityType: string;

  constructor(payload: any) {
    super(payload);
    this.voteAccount = payload.voteAccount;
    this.clockSysvar = payload.clockSysvar;
    this.authority = payload.authority;
    this.newAuthority = payload.newAuthority;
    this.authorityType = payload.authorityType;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramAuthorize({
      ...defaultItems,
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      authority: R.pathOr('', ['value', 'authority'], json),
      newAuthority: R.pathOr('', ['value', 'newAuthority'], json),
      authorityType: R.pathOr('', ['value', 'authorityType'], json),
    });
  }
}

export default VoteProgramAuthorize;

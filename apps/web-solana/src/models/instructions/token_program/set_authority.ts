import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramSetAuthority extends InstructionBase {
  public account: string;
  public authority: string;
  public newAuthority: string;
  public authorityType: string;

  constructor(payload: any) {
    super(payload);
    this.account = payload.account;
    this.authority = payload.authority;
    this.newAuthority = payload.newAuthority;
    this.authorityType = payload.authorityType;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramSetAuthority({
      ...defaultItems,
      account: R.pathOr('', ['value', 'account'], json),
      authority: R.pathOr('', ['value', 'authority'], json),
      newAuthority: R.pathOr('', ['value', 'newAuthority'], json),
      authorityType: R.pathOr('', ['value', 'authorityType'], json),
    });
  }
}

export default TokenProgramSetAuthority;

import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramAuthorizeNonce extends InstructionBase {
  public nonceAccount: string;
  public nonceAuthority: string;
  public newAuthorized: string;

  constructor(payload: any) {
    super(payload);
    this.nonceAccount = payload.nonceAccount;
    this.nonceAuthority = payload.nonceAuthority;
    this.newAuthorized = payload.newAuthorized;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramAuthorizeNonce({
      ...defaultItems,
      nonceAccount: R.pathOr('', ['value', 'nonceAccount'], json),
      nonceAuthority: R.pathOr('', ['value', 'nonceAuthority'], json),
      newAuthorized: R.pathOr('', ['value', 'newAuthorized'], json),
    });
  }
}

export default SystemProgramAuthorizeNonce;

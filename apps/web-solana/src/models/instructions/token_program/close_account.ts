import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramCloseAccount extends InstructionBase {
  public owner: string;
  public account: string;
  public destination: string;

  constructor(payload: any) {
    super(payload);
    this.owner = payload.owner;
    this.account = payload.account;
    this.destination = payload.destination;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramCloseAccount({
      ...defaultItems,
      owner: R.pathOr('', ['value', 'owner'], json),
      account: R.pathOr('', ['value', 'account'], json),
      destination: R.pathOr('', ['value', 'destination'], json),
    });
  }
}

export default TokenProgramCloseAccount;

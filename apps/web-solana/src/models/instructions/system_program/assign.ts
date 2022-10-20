import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramAssign extends InstructionBase {
  public owner: string;
  public account: string;

  constructor(payload: any) {
    super(payload);
    this.owner = payload.owner;
    this.account = payload.account;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramAssign({
      ...defaultItems,
      owner: R.pathOr('', ['value', 'owner'], json),
      account: R.pathOr('', ['value', 'account'], json),
    });
  }
}

export default SystemProgramAssign;

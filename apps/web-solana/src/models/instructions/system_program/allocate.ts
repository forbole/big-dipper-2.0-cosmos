import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramAllocate extends InstructionBase {
  public space: number;
  public account: string;

  constructor(payload: any) {
    super(payload);
    this.space = payload.space;
    this.account = payload.account;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramAllocate({
      ...defaultItems,
      space: R.pathOr(0, ['value', 'space'], json),
      account: R.pathOr('', ['value', 'account'], json),
    });
  }
}

export default SystemProgramAllocate;

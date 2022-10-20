import { InstructionBase } from '@models';
import * as R from 'ramda';

class SystemProgramCreateAccountWithSeed extends InstructionBase {
  public base: string;
  public seed: string;
  public owner: string;
  public space: number;
  public source: string;
  public lamports: number;
  public newAccount: string;

  constructor(payload: any) {
    super(payload);
    this.base = payload.base;
    this.seed = payload.seed;
    this.owner = payload.owner;
    this.space = payload.space;
    this.source = payload.source;
    this.lamports = payload.lamports;
    this.newAccount = payload.newAccount;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new SystemProgramCreateAccountWithSeed({
      ...defaultItems,
      base: R.pathOr('', ['value', 'base'], json),
      seed: R.pathOr('', ['value', 'seed'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
      space: R.pathOr(0, ['value', 'space'], json),
      source: R.pathOr('', ['value', 'source'], json),
      lamports: R.pathOr(0, ['value', 'lamports'], json),
      newAccount: R.pathOr('', ['value', 'newAccount'], json),
    });
  }
}

export default SystemProgramCreateAccountWithSeed;

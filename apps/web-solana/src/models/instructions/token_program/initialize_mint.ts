import { InstructionBase } from '@models';
import * as R from 'ramda';

class TokenProgramInitializeMint extends InstructionBase {
  public mint: string;
  public decimals: number;
  public rentSysvar: string;
  public mintAuthority: string;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.decimals = payload.decimals;
    this.rentSysvar = payload.rentSysvar;
    this.mintAuthority = payload.mintAuthority;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new TokenProgramInitializeMint({
      ...defaultItems,
      mint: R.pathOr('', ['value', 'mint'], json),
      decimals: R.pathOr(0, ['value', 'decimals'], json),
      rentSysvar: R.pathOr('', ['value', 'rentSysvar'], json),
      mintAuthority: R.pathOr('', ['value', 'mintAuthority'], json),
    });
  }
}

export default TokenProgramInitializeMint;

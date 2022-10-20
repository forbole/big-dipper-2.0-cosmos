import { InstructionBase } from '@models';
import * as R from 'ramda';

class VoteProgramVote extends InstructionBase {
  public voteAccount: string;
  public slotHashesSysvar: string;
  public clockSysvar: string;
  public voteAuthority: string;
  public hash: string;
  public timestamp: number;
  public slots: number[];

  constructor(payload: any) {
    super(payload);
    this.voteAccount = payload.voteAccount;
    this.slotHashesSysvar = payload.slotHashesSysvar;
    this.clockSysvar = payload.clockSysvar;
    this.voteAuthority = payload.voteAuthority;
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.slots = payload.slots;
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);

    return new VoteProgramVote({
      ...defaultItems,
      voteAccount: R.pathOr('', ['value', 'voteAccount'], json),
      slotHashesSysvar: R.pathOr('', ['value', 'slotHashesSysvar'], json),
      clockSysvar: R.pathOr('', ['value', 'clockSysvar'], json),
      voteAuthority: R.pathOr('', ['value', 'voteAuthority'], json),
      hash: R.pathOr('', ['value', 'vote', 'hash'], json),
      slots: R.pathOr([], ['value', 'vote', 'slots'], json),
      timestamp: R.pathOr('', ['value', 'vote', 'timestamp'], json),
    });
  }
}

export default VoteProgramVote;

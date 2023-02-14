import numeral from 'numeral';
import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgVote {
  public category: Categories;

  public type: string;

  public proposalId: number | string;

  public voter: string;

  public option:
    | 'VOTE_OPTION_YES'
    | 'VOTE_OPTION_ABSTAIN'
    | 'VOTE_OPTION_NO'
    | 'VOTE_OPTION_NO_WITH_VETO';

  public json: object;

  constructor(payload: object) {
    this.category = 'governance';
    this.type = R.pathOr('', ['type'], payload);
    this.proposalId = R.pathOr('', ['proposalId'], payload);
    this.voter = R.pathOr('', ['voter'], payload);
    this.option = R.pathOr('VOTE_OPTION_YES', ['option'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  public getOptionTranslationKey() {
    if (this.option === 'VOTE_OPTION_ABSTAIN') {
      return 'abstain';
    }
    if (this.option === 'VOTE_OPTION_NO') {
      return 'no';
    }
    if (this.option === 'VOTE_OPTION_NO_WITH_VETO') {
      return 'noWithVeto';
    }
    if (this.option === 'VOTE_OPTION_YES') {
      return 'yes';
    }
    return null;
  }

  static fromJson(json: object): MsgVote {
    return {
      category: 'governance',
      json,
      type: R.pathOr('', ['@type'], json),
      proposalId: numeral(R.pathOr('', ['proposal_id'], json)).value() ?? '',
      voter: R.pathOr('', ['voter'], json),
      option: R.pathOr('VOTE_OPTION_YES', ['option'], json),
      getOptionTranslationKey() {
        if (R.pathOr<MsgVote['option'] | ''>('', ['option'], json) === 'VOTE_OPTION_ABSTAIN') {
          return 'abstain';
        }
        if (R.pathOr<MsgVote['option'] | ''>('', ['option'], json) === 'VOTE_OPTION_NO') {
          return 'no';
        }
        if (R.pathOr<MsgVote['option'] | ''>('', ['option'], json) === 'VOTE_OPTION_NO_WITH_VETO') {
          return 'noWithVeto';
        }
        if (R.pathOr<MsgVote['option'] | ''>('', ['option'], json) === 'VOTE_OPTION_YES') {
          return 'yes';
        }
        return null;
      },
    };
  }
}

export default MsgVote;

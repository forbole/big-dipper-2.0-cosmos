import numeral from 'numeral';

class MsgVote {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public proposalId: number | string;
  public voter: string;
  public option: 'VOTE_OPTION_YES' | 'VOTE_OPTION_ABSTAIN' | 'VOTE_OPTION_NO' | 'VOTE_OPTION_NO_WITH_VETO';

  constructor(payload: any) {
    this.category = 'governance';
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.voter = payload.voter;
    this.option = payload.option;
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

  static fromJson(json: any) {
    return new MsgVote({
      type: json['@type'],
      proposalId: numeral(json?.proposal_id).value(),
      voter: json.voter,
      option: json.option,
    });
  }
}

export default MsgVote;

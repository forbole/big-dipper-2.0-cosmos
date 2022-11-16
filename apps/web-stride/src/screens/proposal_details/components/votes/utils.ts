import type { VoteType } from './types';

export const getVoteKey = (vote: string) => {
  const votes: any = {
    VOTE_OPTION_YES: 'yes',
    VOTE_OPTION_NO: 'no',
    VOTE_OPTION_NO_WITH_VETO: 'veto',
    VOTE_OPTION_ABSTAIN: 'abstain',
    NOT_VOTED: 'notVoted',
  };

  return votes[vote] || vote;
};

export const filterDataByTab = (props: { data: VoteType[]; notVoted: VoteType[]; tab: number }) => {
  if (props.tab === 5) {
    return props.notVoted;
  }

  return props.data.filter((x) => {
    if (props.tab === 1) {
      return x.vote === 'VOTE_OPTION_YES';
    }

    if (props.tab === 2) {
      return x.vote === 'VOTE_OPTION_NO';
    }

    if (props.tab === 3) {
      return x.vote === 'VOTE_OPTION_NO_WITH_VETO';
    }

    if (props.tab === 4) {
      return x.vote === 'VOTE_OPTION_ABSTAIN';
    }

    return true;
  });
};

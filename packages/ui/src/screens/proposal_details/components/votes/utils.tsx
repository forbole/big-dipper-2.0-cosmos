import type { VoteType } from '@/screens/proposal_details/components/votes/types';

export const getVoteKey = (vote: string) => {
  const votes = {
    yes: 'yes',
    no: 'no',
    VOTE_OPTION_NO_WITH_VETO: 'veto',
    abstain: 'abstain',
    NOT_VOTED: 'notVoted',
  };

  return votes[vote as keyof typeof votes] || vote;
};

export const filterDataByTab = (props: { data: VoteType[]; notVoted: VoteType[]; tab: number }) => {
  if (props.tab === 5) {
    return props.notVoted;
  }

  return props.data.filter((x) => {
    if (props.tab === 1) {
      return x.vote === 'yes';
    }

    if (props.tab === 2) {
      return x.vote === 'no';
    }

    if (props.tab === 3) {
      return x.vote === 'abstain';
    }

    return true;
  });
};

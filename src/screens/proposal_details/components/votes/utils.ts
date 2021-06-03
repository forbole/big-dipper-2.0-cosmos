export const getVoteKey = (vote: string) => {
  const votes = {
    VOTE_OPTION_YES: 'yes',
    VOTE_OPTION_NO: 'no',
    VOTE_OPTION_NO_WITH_VETO: 'veto',
    VOTE_OPTION_ABSTAIN: 'abstain',
  };

  return votes[vote] || vote;
};

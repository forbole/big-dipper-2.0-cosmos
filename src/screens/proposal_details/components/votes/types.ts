export type VoteType = {
  vote: string;
  user: string;
}

export type VoteCount = {
  yes: number;
  no: number;
  veto: number;
  abstain: number;
  didNotVote: number;
}
export type VoteState = {
  data: VoteType[];
  voteCount: VoteCount;
  validatorsNotvoted: VoteType[];
};

export type ItemType = Override<VoteType, { user: AvatarName }>

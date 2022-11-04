export type VotesType = {
  yes: TokenUnit;
  no: TokenUnit;
  abstain: TokenUnit;
  veto: TokenUnit;
};
export type VotesGraphState = {
  votes: VotesType;
  bonded: TokenUnit;
  quorum: number;
};

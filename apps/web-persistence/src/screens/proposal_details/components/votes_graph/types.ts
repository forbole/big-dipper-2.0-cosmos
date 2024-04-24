export interface VotesType {
  yes: TokenUnit;
  no: TokenUnit;
  abstain: TokenUnit;
  veto: TokenUnit;
}
export interface VotesGraphState {
  votes: VotesType;
  bonded: TokenUnit;
  quorum: string;
}

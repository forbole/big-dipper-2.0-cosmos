export interface VotesType {
  yes: TokenUnit;
  no: TokenUnit;
  abstain: TokenUnit;
}
export interface VotesGraphState {
  votes: VotesType;
  bonded: TokenUnit;
  quorum: string;
}

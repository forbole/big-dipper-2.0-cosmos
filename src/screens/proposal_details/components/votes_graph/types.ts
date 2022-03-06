// export type TallyType = {
//   yes: number;
//   no: number;
//   abstain: number;
//   veto: number;
//   total: number;
//   quorum: number;
//   bondedTokens: number;
//   denom: string;
// }

export type VotesGraphState = {
  yes: TokenUnit;
  no: TokenUnit;
  abstain: TokenUnit;
  veto: TokenUnit;
}

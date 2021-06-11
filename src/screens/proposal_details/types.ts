export type OverviewType = {
  title: string;
  id: number;
  description: string;
  status: string;
  submitTime: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
}

export type TallyType = {
  yes: number;
  no: number;
  abstain: number;
  veto: number;
  total: number;
  quorum: number;
  bondedTokens: number;
  denom: string;
}

export type VoteType = {
  vote: string;
  user: AvatarName;
}

export type DepositType = {
  amount: TokenUnit;
  user: AvatarName;
}

export type ProposalState = {
  loading: boolean;
  exists: boolean;
  content: string;
  overview: OverviewType;
  tally: TallyType;
  votes: {
    tab: number;
    yes: number;
    no: number;
    abstain: number;
    veto: number;
    total: number;
    data: VoteType[];
  };
  deposits: DepositType[];
}

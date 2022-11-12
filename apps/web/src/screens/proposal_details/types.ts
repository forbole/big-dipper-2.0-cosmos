export type OverviewType = {
  title: string;
  id: number;
  proposer: string;
  description: string;
  status: string;
  submitTime: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
  content: string;
};

export type ProposalState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
};

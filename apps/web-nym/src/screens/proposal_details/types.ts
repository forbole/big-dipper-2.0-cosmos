export interface OverviewType {
  title: string;
  id: number;
  proposer: string;
  description: string;
  status: string;
  submitTime: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
  content: {
    recipient: string;
    amount: Array<{
      amount: string;
      denom: string;
    }>;
  };
}

export interface ProposalState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}

export interface OverviewType {
  title: string;
  id: number;
  proposer: string;
  description: string;
  status: string;
  submitTime: string;
  proposalType: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
  content: string;
}

export interface ProposalState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}

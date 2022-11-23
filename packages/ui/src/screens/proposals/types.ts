export interface ProposalType {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface ProposalsState {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: ProposalType[];
}

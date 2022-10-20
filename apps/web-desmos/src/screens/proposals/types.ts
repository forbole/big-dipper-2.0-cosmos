export type ProposalType = {
  id: number;
  title: string;
  description: string;
  status: string;
}

export type ProposalsState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: ProposalType[];
}

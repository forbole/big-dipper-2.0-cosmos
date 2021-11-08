export type OverviewType = {
    address: string;
    withdrawalAddress: string;
  }

export type ProfileDetailState = {
    loading: boolean;
    exists: boolean;
    desmosProfile: DesmosProfile | null;
    overview: OverviewType;
    transactions: {
      hasNextPage: boolean;
      isNextPageLoading: boolean;
      offsetCount: number;
      data: Transactions[];
    };
  }

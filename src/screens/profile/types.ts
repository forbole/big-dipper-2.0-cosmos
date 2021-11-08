export type OverviewType = {
    address: string;
    withdrawalAddress: string;
  }

export type ProfileDetailState = {
    loading: boolean;
    exists: boolean;
    desmosProfile: DesmosProfile | null;
  }

export interface ValidatorsState {
  votingPowerOverall: number;
  items: {
    validator: string;
    votingPower: number;
    votingPowerPercent: number;
    commission: number;
    self: number;
    selfPercent: number;
    condition: number;
  }[];
  tab: number;
  handleTabChange?: (event:any, newvalue:number) => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  handleSort?: (key: string) => void;
  handleSearch?: (value: string) => void;

  // formatUi?: (screen?: 'mobile' | 'desktop') => {
  //   height: React.ReactNode;
  //   txs: string;
  //   time: string;
  //   proposer: React.ReactNode;
  //   hash: string;
  // }[];
}

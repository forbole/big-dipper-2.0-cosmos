export interface ValidatorsState {
  items: any[];
  tab: number;
  handleTabChange?: (event:any, newvalue:number) => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  handleSort?: (key: string) => void;
  handleSearch?: (value: string) => void;
}

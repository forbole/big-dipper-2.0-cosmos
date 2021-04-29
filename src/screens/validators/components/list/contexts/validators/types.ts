import React from 'react';

export type ValidatorItems = {
  moniker: string;
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  selfPercent: number;
  condition: number;
  status: number;
  jailed: boolean;
}
export interface ValidatorsState {
  votingPowerOverall: number;
  items: ValidatorItems[];
  tab: number;
  handleTabChange?: (event:any, newvalue:number) => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  handleSort?: (key: string) => void;
  handleSearch?: (value: string) => void;
  uiData?: {
    validator: React.ReactNode;
    votingPower: React.ReactNode;
    commission: string;
    self: string;
    condition: React.ReactNode;
    idx: string;
  }[];
}

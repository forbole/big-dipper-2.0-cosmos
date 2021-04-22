import React from 'react';

export interface ValidatorsState {
  votingPowerOverall: number;
  items: {
    moniker: string;
    validator: string;
    votingPower: number;
    votingPowerPercent: number;
    commission: number;
    self: number;
    selfPercent: number;
    condition: number;
    status: number;
    jailed: boolean;
  }[];
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

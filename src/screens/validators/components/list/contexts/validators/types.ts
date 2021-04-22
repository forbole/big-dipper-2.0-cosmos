import React from 'react';

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
  uiData?: {
    validator: React.ReactNode;
    votingPower: React.ReactNode;
    // votingPowerPercent: string;
    // votingPowerTotal: string;
    commission: string;
    self: string;
    condition: string | number;
    idx: string;
  }[];
}

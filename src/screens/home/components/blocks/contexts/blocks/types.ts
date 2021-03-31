import React from 'react';

export interface BlocksState {
  blocks: any[];
  rawData: {
    height: number;
    txs: number;
    timestamp: string;
    proposer: string;
    hash: string;
  }[];
  formatUi?: (screen?: 'mobile' | 'desktop') => {
    height: React.ReactNode;
    txs: string;
    time: string;
    proposer: React.ReactNode;
    hash: string;
  }[];
}

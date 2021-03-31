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
  uiData: {
    height: React.ReactNode;
    txs: string;
    time: string;
    proposer: React.ReactNode;
    hash: string;
  }[];
}

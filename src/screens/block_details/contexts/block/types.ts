import React from 'react';

export type BlockState = {
  rawData: {
    exists: boolean;
    loading: boolean;
    block: {
      height: number;
      txs: number;
      timestamp: string;
      proposer: string;
      hash: string;
      votingPower: number;
    }
    supply: {
      bonded: number;
    }
    transactions: {
      height: number;
      hash: string;
      success: boolean;
      timestamp: string;
      messages: number;
    }[];
    signatures: {
      validator: string;
      votingPower: number;
      signed: boolean;
      moniker: string;
    }[];
  }
  uiData: {
    block: {
      label: string;
      detail: string | React.ReactNode;
    }[],
    signatures: {
      signed: React.ReactNode;
      validator: React.ReactNode;
      votingPower: string;
    }[]
  };
  formatTransactions?: (screen?: 'desktop' | 'mobile') => {
    block: React.ReactNode;
    hash: React.ReactNode;
    result: React.ReactNode;
    time: string;
    messages: string;
  }[],

}

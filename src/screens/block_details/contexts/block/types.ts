import React from 'react';

export type BlockState = {
  item?: any;
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
  }
  uiData: {
    block: {
      label: string;
      detail: string | React.ReactNode;
    }[]
  };
}

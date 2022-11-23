import React from 'react';

export interface SingleBlockMobileType {
  block: string;
  shard?: any;
  hash: string | React.ReactNode;
  txs: string;
  time: string;
}

import React from 'react';

export type SingleBlockMobileType = {
  block: string;
  shard?: any;
  hash: string | React.ReactNode;
  txs: string;
  time: string;
}

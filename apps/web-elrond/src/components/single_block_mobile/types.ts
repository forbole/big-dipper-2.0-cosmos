import { ReactNode } from 'react';

export interface SingleBlockMobileType {
  block: string;
  shard?: unknown;
  hash: ReactNode;
  txs: string;
  time: string;
}

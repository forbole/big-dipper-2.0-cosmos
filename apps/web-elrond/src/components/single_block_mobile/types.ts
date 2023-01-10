import { ReactNode } from 'react';

export interface SingleBlockMobileType {
  block: string;
  shard?: ReactNode;
  hash: ReactNode;
  txs: string;
  time: string;
}

import { ReactNode } from 'react';

export interface SingleBlockMobileType {
  block: ReactNode;
  shard?: ReactNode;
  hash: ReactNode;
  txs: ReactNode;
  time: ReactNode;
}

import type { BigDipperNetwork } from '@/models';

export type Networks = BigDipperNetwork[];
export type Selected = string;

export interface AtomState {
  networks: Networks;
  selected: Selected;
}

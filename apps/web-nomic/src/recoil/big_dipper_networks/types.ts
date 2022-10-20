import { BigDipperNetwork } from '@models';

export type Networks = BigDipperNetwork[];
export type Selected = string;

export type AtomState = {
  networks: Networks;
  selected: Selected;
}

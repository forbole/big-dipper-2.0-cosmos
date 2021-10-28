import { BigDipperNetwork } from '@models';

export interface NetworksState {
  networks: BigDipperNetwork[];
  selected: string;
  loading: boolean;
}

export interface DataBlockState {
  blockHeight: number;
  transactions: number;
  validators: {
    total: number;
    active: number;
  };
}

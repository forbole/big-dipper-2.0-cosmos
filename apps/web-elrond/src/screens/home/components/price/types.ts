export interface PriceType {
  time: string;
  value: number;
}

export interface PriceState {
  items: PriceType[];
}

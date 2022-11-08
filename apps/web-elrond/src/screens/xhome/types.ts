export type PriceType = {
  time: string;
  value: number;
};

export type HomeState = {
  loading: boolean;
  exists: boolean;
  price: PriceType[];
};

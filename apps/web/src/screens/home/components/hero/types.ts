export type TokenPriceType = {
  time: string;
  value: number;
};

export type HeroState = {
  loading: boolean;
  exists: boolean;
  tokenPriceHistory: TokenPriceType[];
};

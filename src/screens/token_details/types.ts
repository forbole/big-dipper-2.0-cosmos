export type Cw20TokenInfo = {
  address: string,
  name: string,
  denom: string,
  exponent: number,
  circulatingSupply: number,
  maxSupply?: number,
  minterAddress?: string,
  projectUrl?: string,
}

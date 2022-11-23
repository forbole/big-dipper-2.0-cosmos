export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';
export type Date = 'locale' | 'utc';
export type Tx = 'compact' | 'detailed';

export interface AtomState {
  theme: Theme;
  dateFormat: Date;
  txListFormat: Tx;
}

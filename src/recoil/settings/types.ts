export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia' | 'cudos';
export type Date = 'locale' | 'utc';
export type Tx = 'compact' | 'detailed';

export type AtomState = {
  theme: Theme;
  dateFormat: Date;
  txListFormat: Tx;
}

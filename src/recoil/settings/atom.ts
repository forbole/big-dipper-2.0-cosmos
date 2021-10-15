import { atom } from 'recoil';
import { AtomState } from './types';

export const THEME_LIST = [
  'light',
  'dark',
  'deuteranopia',
  'tritanopia',
];

export const DATE_LIST = [
  'locale',
  'utc',
];

export const TX_LIST = [
  'compact',
  'detailed',
];

const initialState: AtomState = {
  theme: 'light',
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const settingsAtom = atom({
  key: 'settingsAtom',
  default: initialState,
});

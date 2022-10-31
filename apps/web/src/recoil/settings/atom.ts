import { chainConfig } from 'ui/dist';
import { atom } from 'recoil';
import {
  AtomState,
  Theme,
} from './types';

const initialState: AtomState = {
  theme: chainConfig.themes.default as Theme,
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

import chainConfig from 'ui/chainConfig';
import { atom } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = {
  theme: chainConfig.themes.default,
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

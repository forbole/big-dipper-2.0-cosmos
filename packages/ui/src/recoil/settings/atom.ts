import { atom } from 'recoil';
import chainConfig from 'ui/chainConfig';
import { AtomState } from './types';

const initialState: AtomState = {
  theme: chainConfig.themes.default as AtomState['theme'],
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

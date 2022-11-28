import chainConfig from '@/chainConfig';
import type { AtomState } from '@/recoil/settings/types';
import { atom } from 'recoil';

const initialState: AtomState = {
  theme: chainConfig.themes.default as AtomState['theme'],
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

import { atom } from 'recoil';
import chainConfig from '@/chainConfig';
import type { AtomState } from '@/recoil/settings/types';

const initialState: AtomState = {
  theme: chainConfig.themes.default as AtomState['theme'],
  dateFormat: 'locale',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});

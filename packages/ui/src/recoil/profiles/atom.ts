import type { AtomState } from '@/recoil/profiles/types';
import { atomFamily } from 'recoil';

const initialState: AtomState = null;

export const atomFamilyState = atomFamily<AtomState, string>({
  key: 'profile',
  default: initialState,
});

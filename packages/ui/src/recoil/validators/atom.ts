import type { AtomState } from '@/recoil/validators/types';
import { atomFamily } from 'recoil';

const initialState: AtomState = null;

export const atomFamilyState = atomFamily<AtomState, string>({
  key: 'validator',
  default: initialState,
});

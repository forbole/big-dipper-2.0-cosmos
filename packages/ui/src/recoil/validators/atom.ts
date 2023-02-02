import { atomFamily } from 'recoil';
import type { AtomState } from '@/recoil/validators/types';

const initialState: AtomState = null;

export const atomFamilyState = atomFamily<AtomState, string>({
  key: 'validator',
  default: initialState,
});

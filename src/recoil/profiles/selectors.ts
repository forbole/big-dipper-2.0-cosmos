import { selectorFamily } from 'recoil';
import { atomFamilyState } from './atom';
import { AtomState } from './types';

/**
 * Takes a delegator address and returns the profile
 * Returns null if no record found
 * ex - cosmosvalcon1... returns cosmosvaloper1...
 * @param address string
 * @returns string | null
 */
const getProfile = (address: string) => ({ get }): AtomState => {
  const state = get(atomFamilyState(address));
  return state;
};

export const writeProfile = selectorFamily<AtomState, string>({
  key: 'profile.write.validator',
  get: getProfile,
  set: (address: string) => ({ set }, profile) => {
    set(atomFamilyState(address), profile);
  },
});

export const readProfile = selectorFamily({
  key: 'profile.read.validator',
  get: getProfile,
});

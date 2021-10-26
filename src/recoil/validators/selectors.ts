import { selectorFamily } from 'recoil';
import { atomFamilyState } from './atom';
import { AtomState } from './types';

/**
 * Takes a consensus address and returns the delegator and validator
 * address if we have a record of it.
 * Returns null if no record found
 * ex - cosmosvalcon1... returns cosmosvaloper1...
 * @param address string
 * @returns string | null
 */
const getValidator = (address: string) => ({ get }): AtomState => {
  const state = get(atomFamilyState(address));
  return state;
};

export const writeValidator = selectorFamily<AtomState, string>({
  key: 'validator.write.validator',
  get: getValidator,
  set: (address: string) => ({ set }, validator) => {
    set(atomFamilyState(address), validator);
  },
});

export const readValidator = selectorFamily({
  key: 'validator.read.validator',
  get: getValidator,
});

import {
  selectorFamily, GetRecoilValue,
} from 'recoil';
import { bech32 } from 'bech32';
import { chainConfig } from '@configs';
import { readValidator } from '@recoil/validators';
import { atomFamilyState } from './atom';
import { AtomState } from './types';

// ======================================================================
// utils
// ======================================================================

const getDelegatorAddress = ({
  address, get,
}: {address: string, get: GetRecoilValue}): string => {
  const consensusRegex = `^(${chainConfig.prefix.consensus})`;
  const validatorRegex = `^(${chainConfig.prefix.validator})`;
  const delegatorRegex = `^(${chainConfig.prefix.account})`;
  let selectedAddress = '';
  if (new RegExp(consensusRegex).test(address)) {
    // address given is a consensus
    const validator = get(readValidator(address));
    if (validator) {
      selectedAddress = validator.delegator;
    }
  } else if (new RegExp(validatorRegex).test(address)) {
    // address given is a validator
    const decode = bech32.decode(address).words;
    selectedAddress = bech32.encode(chainConfig.prefix.account, decode);
  } else if (new RegExp(delegatorRegex).test(address)) {
    // address given is a delegator
    selectedAddress = address;
  }
  return selectedAddress;
};

/**
 * Takes a delegator address and returns the profile
 * Returns null if no record found
 * ex - cosmosvalcon1... returns cosmosvaloper1...
 * @param address string
 * @returns string | null
 */
const getProfile = (address: string) => ({ get }): AtomState => {
  const delegatorAddress = getDelegatorAddress({
    address, get,
  });
  const state = get(atomFamilyState(delegatorAddress));
  return state;
};

// ======================================================================
// selectors
// ======================================================================

export const writeProfile = selectorFamily<AtomState, string>({
  key: 'profile.write.profile',
  get: getProfile,
  set: (address: string) => ({ set }, profile) => {
    set(atomFamilyState(address), profile);
  },
});

export const readProfile = selectorFamily({
  key: 'profile.read.profile',
  get: getProfile,
});

export const readProfiles = selectorFamily({
  key: 'profile.read.profiles',
  get: (addresses:string[]) => ({ get }): AtomState[] => {
    const profiles = addresses.map((x) => {
      const delegatorAddress = getDelegatorAddress({
        address: x, get,
      });
      const state = get(atomFamilyState(delegatorAddress));
      return state;
    });
    return profiles;
  },
});

export const readDelegatorAddress = selectorFamily({
  key: 'profile.read.delegatorAddress',
  get: (address:string) => ({ get }): string => {
    return getDelegatorAddress({
      address, get,
    });
  },
});

export const readDelegatorAddresses = selectorFamily({
  key: 'profile.read.delegatorAddress',
  get: (addresses:string[]) => ({ get }): string[] => {
    return addresses.map((x) => {
      return getDelegatorAddress({
        address: x, get,
      });
    });
  },
});

import {
  selectorFamily,
  GetRecoilValue,
} from 'recoil';
import * as R from 'ramda';
import { bech32 } from 'bech32';
import { chainConfig } from '@configs';
// import { readValidator } from '@recoil/validators';
import { AtomState as ProfileAtomState } from '@recoil/profiles/types';
import { atomFamilyState } from './atom';

// ======================================================================
// selector utils
// ======================================================================

const getDelegatorAddress = ({
  // eslint-disable-next-line
  address, get,
}: {address: string, get: GetRecoilValue}): string => {
  return address;
};

export const validatorToDelegatorAddress = (address: string) => {
  const decode = bech32.decode(address).words;
  return bech32.encode(chainConfig.prefix.account, decode);
};

/**
 * Returns a validator address if the given address is a consensus address.
 * Returns address otherwise
 */
const getReturnAddress = ({
  // eslint-disable-next-line
  address, get,
}: {address: string, get: GetRecoilValue}): string => {
  return address;
};

/**
 * Takes a delegator address and returns the profile
 * Returns null if no record found
 * ex - cosmosvalcon1... returns cosmosvaloper1...
 * @param address string
 * @returns string | null
 */
const getProfile = (address: string) => ({ get }): AvatarName => {
  const returnAddress = getReturnAddress({
    address, get,
  });
  const delegatorAddress = getDelegatorAddress({
    address, get,
  });
  const state = get(atomFamilyState(delegatorAddress));
  const name = R.pathOr(address, ['moniker'], state);
  const imageUrl = R.pathOr('', ['imageUrl'], state);
  return ({
    address: returnAddress,
    name,
    imageUrl,
  });
};

const getProfiles = (addresses: string[]) => ({ get }): AvatarName[] => {
  const profiles = addresses.map((x) => {
    const returnAddress = getReturnAddress({
      address: x, get,
    });
    const delegatorAddress = getDelegatorAddress({
      address: x, get,
    });
    const state = get(atomFamilyState(delegatorAddress));
    const name = R.pathOr(x, ['moniker'], state);
    const imageUrl = R.pathOr('', ['imageUrl'], state);
    return ({
      address: returnAddress,
      name,
      imageUrl,
    });
  });
  return profiles;
};

// ======================================================================
// selectors
// ======================================================================
export const writeProfile = selectorFamily<AvatarName, string>({
  key: 'profile.write.profile',
  get: getProfile,
  set: (address: string) => ({
    set, get,
  }, profile: AvatarName) => {
    const delegatorAddress = getDelegatorAddress({
      address, get,
    });
    if (delegatorAddress) {
      if (profile === null) {
        set(atomFamilyState(delegatorAddress), false);
      } else {
        set(atomFamilyState(delegatorAddress), {
          moniker: profile.name,
          imageUrl: profile.imageUrl,
        });
      }
    }
  },
});

export const readProfile = selectorFamily({
  key: 'profile.read.profile',
  get: getProfile,
});

export const readProfiles = selectorFamily({
  key: 'profile.read.profiles',
  get: getProfiles,
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
  key: 'profile.read.delegatorAddresses',
  get: (addresses:string[]) => ({ get }): string[] => {
    return addresses.map((x) => {
      return getDelegatorAddress({
        address: x, get,
      });
    });
  },
});

export const readProfileExist = selectorFamily({
  key: 'profile.read.profileExist',
  get: (address: string) => ({ get }): ProfileAtomState => {
    const delegatorAddress = getDelegatorAddress({
      address, get,
    });
    const state = get(atomFamilyState(delegatorAddress));
    return state;
  },
});

export const readProfilesExist = selectorFamily({
  key: 'profile.read.profilesExist',
  get: (addresses: string[]) => ({ get }) => {
    const profiles: ProfileAtomState[] = addresses.map((x) => {
      const delegatorAddress = getDelegatorAddress({
        address: x, get,
      });
      const state = get(atomFamilyState(delegatorAddress));
      return state;
    });
    return profiles;
  },
});

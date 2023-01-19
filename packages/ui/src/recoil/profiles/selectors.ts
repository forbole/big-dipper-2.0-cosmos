import { bech32 } from 'bech32';
import { GetRecoilValue, selectorFamily } from 'recoil';
import chainConfig from '@/chainConfig';
import { atomFamilyState } from '@/recoil/profiles/atom';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { readValidator } from '@/recoil/validators';

const { prefix } = chainConfig();
const consensusRegex = new RegExp(`^(${prefix.consensus})`);
const validatorRegex = new RegExp(`^(${prefix.validator})`);
const delegatorRegex = new RegExp(`^(${prefix.account})`);

/**
 * It takes an address and returns the delegator address
 * @param  - `address` - consensus address or validator address or delegator address
 * @returns The address of the delegator.
 */
const getDelegatorAddress = ({
  address,
  get,
}: {
  address: string;
  get: GetRecoilValue;
}): string => {
  let selectedAddress = '';
  if (consensusRegex.test(address)) {
    // address given is a consensus
    const validator = get(readValidator(address));
    if (validator) {
      selectedAddress = validator.delegator;
    }
  } else if (validatorRegex.test(address)) {
    // address given is a validator
    const decode = bech32.decode(address).words;
    selectedAddress = bech32.encode(prefix.account, decode);
  } else if (delegatorRegex.test(address)) {
    // address given is a delegator
    selectedAddress = address;
  }
  return selectedAddress;
};

/**
 * It takes a validator address and returns the delegator address
 * @param {string} address - The address of the validator to be converted to the delegator address.
 * @returns The address of the validator
 */
export const validatorToDelegatorAddress = (address: string) => {
  const decode = bech32.decode(address).words;
  return bech32.encode(prefix.account, decode);
};

/**
 * Returns a validator address if the given address is a consensus address.
 * Returns address otherwise
 */
const getReturnAddress = ({ address, get }: { address: string; get: GetRecoilValue }): string => {
  let selectedAddress = address;
  if (consensusRegex.test(address)) {
    // address given is a consensus
    const validator = get(readValidator(address));
    if (validator) {
      selectedAddress = validator.validator;
    }
  }
  return selectedAddress;
};

/**
 * Takes a address and returns the profile
 * Returns null if no record found
 * ex - cosmosvalcon1... returns cosmosvaloper1...
 * @param address string
 * @returns string | null
 */
const getProfile =
  (address: string) =>
  ({ get }: { get: GetRecoilValue }): AvatarName => {
    const returnAddress = getReturnAddress({
      address,
      get,
    });
    const delegatorAddress = getDelegatorAddress({
      address,
      get,
    });
    const state = get(atomFamilyState(delegatorAddress));
    const name = state && state !== true ? state.moniker ?? address : address;
    const imageUrl = state && state !== true ? state.imageUrl || undefined : undefined;
    return {
      address: returnAddress,
      name: name || address || '',
      imageUrl,
    };
  };

/**
 * It takes an array of addresses and returns an array of AvatarName objects
 * @param {string[]} addresses - string[] - an array of addresses to get the profile for
 * @returns An array of objects with the following properties:
 *   address: string
 *   name: string
 *   imageUrl: string
 */
const getProfiles =
  (addresses: string[]) =>
  ({ get }: { get: GetRecoilValue }): AvatarName[] => {
    const profiles = addresses.map((x) => {
      const returnAddress = getReturnAddress({
        address: x,
        get,
      });
      const delegatorAddress = getDelegatorAddress({
        address: x,
        get,
      });
      const state = get(atomFamilyState(delegatorAddress));
      const name = state && state !== true ? state?.moniker ?? x : x;
      const imageUrl = state && state !== true ? state?.imageUrl || undefined : undefined;
      return {
        address: returnAddress,
        name: name || x || '',
        imageUrl,
      };
    });
    return profiles;
  };

/* A selector family that takes an address and returns a profile. */
export const writeProfile = selectorFamily<AvatarName | null, string>({
  key: 'profile.write.profile',
  get: getProfile,
  set:
    (address: string) =>
    ({ set, get }, profile) => {
      const delegatorAddress = getDelegatorAddress({
        address,
        get,
      });
      if (delegatorAddress) {
        if (!isAvatarName(profile)) {
          set(atomFamilyState(delegatorAddress), false);
        } else {
          set(atomFamilyState(delegatorAddress), {
            moniker: profile.name,
            imageUrl: profile.imageUrl || undefined,
          });
        }
      }

      function isAvatarName(x: typeof profile): x is AvatarName {
        if (!x) return false;
        return 'name' in x && 'imageUrl' in x;
      }
    },
});

/* Creating a selector family that takes an address and returns a profile. */
export const readProfile = selectorFamily({
  key: 'profile.read.profile',
  get: getProfile,
});

/* Creating a selector family that takes an array of addresses and returns an array of AvatarName
objects. */
export const readProfiles = selectorFamily({
  key: 'profile.read.profiles',
  get: getProfiles,
});

/* A selector family that takes an address and returns a delegator address. */
export const readDelegatorAddress = selectorFamily({
  key: 'profile.read.delegatorAddress',
  get:
    (address: string) =>
    ({ get }): string =>
      getDelegatorAddress({
        address,
        get,
      }),
});

/* A selector family that takes an array of addresses and returns an array of delegator addresses. */
export const readDelegatorAddresses = selectorFamily({
  key: 'profile.read.delegatorAddresses',
  get:
    (addresses: string[]) =>
    ({ get }): string[] =>
      addresses.map((x) =>
        getDelegatorAddress({
          address: x,
          get,
        })
      ),
});

/* A selector family that takes an address and returns a profile. */
export const readProfileExist = selectorFamily({
  key: 'profile.read.profileExist',
  get:
    (address: string) =>
    ({ get }): ProfileAtomState => {
      const delegatorAddress = getDelegatorAddress({
        address,
        get,
      });
      const state = get(atomFamilyState(delegatorAddress));
      return state;
    },
});

/* A selector family that takes an array of addresses and returns an array of profile states. */
export const readProfilesExist = selectorFamily({
  key: 'profile.read.profilesExist',
  get:
    (addresses: string[]) =>
    ({ get }) => {
      const profiles: ProfileAtomState[] = addresses.map((x) => {
        const delegatorAddress = getDelegatorAddress({
          address: x,
          get,
        });
        const state = get(atomFamilyState(delegatorAddress));
        return state;
      });
      return profiles;
    },
});

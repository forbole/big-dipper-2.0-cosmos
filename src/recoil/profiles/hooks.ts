/* eslint-disable max-len */
import {
  useState, useEffect,
} from 'react';
import {
  useRecoilValue,
  useRecoilCallback,
} from 'recoil';
import { chainConfig } from '@configs';
import { useDesmosProfile } from '@hooks';
import { bech32 } from 'bech32';
import {
  readProfile,
  atomFamilyState as profileAtomState,
} from '@recoil/profiles';
import {
  readValidator,
} from '@recoil/validators';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string) => {
  const [profileAddress, setProfileAddress] = useState('');
  const profile = useRecoilValue(readProfile(profileAddress));

  const {
    fetchDesmosProfile,
    formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data): DesmosProfile => {
      return formatDesmosProfile(data);
    },
  });

  const callback = useRecoilCallback(({
    set, snapshot,
  }) => async () => {
    // const consensusRegex = `^(${chainConfig.prefix.consensus})`;
    // const validatorRegex = `^(${chainConfig.prefix.validator})`;
    // const delegatorRegex = `^(${chainConfig.prefix.account})`;
    let selectedAddress = '';
    if (new RegExp(consensusRegex).test(address)) {
      // address given is a consensus
      const validator = await snapshot.getPromise(readValidator(address));
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

    setProfileAddress(selectedAddress);

    const fetchedProfile: DesmosProfile = await fetchDesmosProfile(selectedAddress);

    if (fetchedProfile === null) {
      set(profileAtomState(selectedAddress), false);
    } else {
      set(profileAtomState(selectedAddress), {
        moniker: fetchedProfile.nickname,
        imageUrl: fetchedProfile.imageUrl,
      });
    }
  });

  useEffect(() => {
    callback();
  }, [address, profileAddress]);

  return ({
    profile: profile ?? ({
      moniker: address,
    }),
  });
};

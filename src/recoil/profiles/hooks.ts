/* eslint-disable max-len */
import {
  useState, useEffect,
} from 'react';
import {
  useRecoilState, useRecoilValue,
} from 'recoil';
import { chainConfig } from '@configs';
import { useDesmosProfile } from '@hooks';
import { bech32 } from 'bech32';

import {
  writeProfile,
} from '@recoil/profiles';
import {
  readValidator,
} from '@recoil/validators';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string) => {
  const validator = useRecoilValue(readValidator(address));
  const [selectedAddress, setSelectedAddress] = useState('');
  const [profile, setProfile] = useRecoilState(writeProfile(selectedAddress));

  const {
    fetchDesmosProfile,
    formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      const formatted = formatDesmosProfile(data);
      if (formatted === null) {
        setProfile(false);
      } else {
        setProfile({
          moniker: formatted.nickname,
          imageUrl: formatted.imageUrl,
        });
      }
    },
  });

  useEffect(() => {
    const consensusRegex = `^(${chainConfig.prefix.consensus})`;
    const validatorRegex = `^(${chainConfig.prefix.validator})`;
    const delegatorRegex = `^(${chainConfig.prefix.account})`;
    if (new RegExp(consensusRegex).test(address) && validator) {
      // address given is a consensus
      setSelectedAddress(validator.delegator);
    } else if (new RegExp(validatorRegex).test(address)) {
      // address given is a validator
      const decode = bech32.decode(address).words;
      setSelectedAddress(bech32.encode(chainConfig.prefix.account, decode));
    } else if (new RegExp(delegatorRegex).test(address)) {
      // address given is a delegator
      setSelectedAddress(address);
    }
  }, [address]);

  useEffect(() => {
    if (chainConfig.extra.profile && profile === null && address) {
      fetchDesmosProfile(selectedAddress);
    }
  }, [address]);

  return ({
    profile: profile ?? ({
      moniker: address,
    }),
  });
};

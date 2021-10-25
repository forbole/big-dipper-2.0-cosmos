/* eslint-disable max-len */
import { useRecoilState } from 'recoil';
import * as R from 'ramda';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { useDesmosProfile } from '@hooks';
import {
  writeValidator,
} from '@recoil/validators';
import { writeProfile } from '@recoil/profiles';

export const useValidatorRecoil = () => {
  const {
    fetchDesmosProfile,
    formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      return formatDesmosProfile(data);
    },
  });

  useValidatorAddressesQuery({
    onError: (error) => {
      console.error(error.message);
    },
    onCompleted: async (data) => {
      formatValidatorsAddressList(data);
      setProfiles(data);
    },
  });

  const formatValidatorsAddressList = async (data: ValidatorAddressesQuery) => {
    // set initial consensus address dictionary
    data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const delegatorAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;
      const [_, setValidator] = useRecoilState(writeValidator(consensusAddress));

      setValidator({
        delegator: delegatorAddress,
        validator: validatorAddress,
      });
    });
  };

  const setProfiles = async (data: ValidatorAddressesQuery) => {
    if (chainConfig.extra.profile) {
      let profiles = [];
      data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
        const delegatorAddress = x.validatorInfo.selfDelegateAddress;
        profiles.push(fetchDesmosProfile(delegatorAddress));
      });

      profiles = await Promise.allSettled(profiles);

      data?.validator?.filter((x) => x.validatorInfo).forEach((x, i) => {
        const delegatorAddress = x.validatorInfo.selfDelegateAddress;
        const [_, setProfile] = useRecoilState(writeProfile(delegatorAddress));

        const profile = R.pathOr(undefined, [i, 'value'], profiles);

        if (profile) {
          // sets profile priority
          const moniker = R.pathOr(undefined, ['nickname'], profile)
          || R.pathOr('', ['validatorDescriptions', 0, 'moniker'], x);
          const imageUrl = (
            R.pathOr('', ['imageUrl'], profile)
            || R.pathOr('', ['validatorDescriptions', 0, 'avatarUrl'], x)
          );

          setProfile({
            moniker,
            imageUrl,
          });
        } else {
          setProfile(false);
        }
      });
    }
  };
};

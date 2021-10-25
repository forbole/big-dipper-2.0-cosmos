/* eslint-disable max-len */
import {
  useRecoilCallback,
} from 'recoil';
import * as R from 'ramda';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { useDesmosProfile } from '@hooks';
import {
  atomFamilyState as validatorAtomState,
} from '@recoil/validators';
import {
  atomFamilyState as profileAtomState,
  writeProfile,
} from '@recoil/profiles';

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
      await formatValidatorsAddressList(data);
      await setProfiles(data);
    },
  });

  const formatValidatorsAddressList = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const delegatorAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;

      set(validatorAtomState(consensusAddress), {
        delegator: delegatorAddress,
        validator: validatorAddress,
      });
    });
  });

  const setProfiles = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    let profiles = [];
    if (chainConfig.extra.profile) {
      data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
        const delegatorAddress = x.validatorInfo.selfDelegateAddress;
        profiles.push(fetchDesmosProfile(delegatorAddress));
      });
    }

    profiles = await Promise.allSettled(profiles);
    data?.validator?.filter((x) => x.validatorInfo).forEach((x, i) => {
      const delegatorAddress = x.validatorInfo.selfDelegateAddress;
      const profile = R.pathOr(undefined, [i, 'value'], profiles);

      // sets profile priority
      const moniker = R.pathOr(undefined, ['nickname'], profile)
      || R.pathOr('', ['validatorDescriptions', 0, 'moniker'], x);
      const imageUrl = (
        R.pathOr('', ['imageUrl'], profile)
        || R.pathOr('', ['validatorDescriptions', 0, 'avatarUrl'], x)
      );
      // ryuash
      if (x.validatorInfo.operatorAddress === 'desmosvaloper195rzr58csup9jgkfr2zwtxr4xc6skdlc26mdrt') {
        console.log(moniker, 'what is your moniker');
        console.log(x.validatorInfo.selfDelegateAddress, 'delegator address');
      }
      set(writeProfile(delegatorAddress), {
        moniker,
        imageUrl,
      });
    });
  });
};

/* eslint-disable max-len */
import {
  useRecoilState,
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
  writeValidator,
  atomFamilyState,
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
      // setProfiles(data);
    },
  });

  const formatValidatorsAddressList = useRecoilCallback(({
    snapshot, set,
  }) => async (data: ValidatorAddressesQuery) => {
    data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const delegatorAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;
      snapshot.getPromise(writeValidator(consensusAddress)).then((test) => {
        console.log(test, 'num of cars');
      });

      set(atomFamilyState(consensusAddress), {
        delegator: delegatorAddress,
        validator: validatorAddress,
      });
    });
  });

  const xformatValidatorsAddressList = async (data: ValidatorAddressesQuery) => {
    // set initial consensus address dictionary
    data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const delegatorAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;
      useRecoilCallback(({
        snapshot, set,
      }) => async () => {
        const numItemsInCart = await snapshot.getPromise(writeValidator(consensusAddress));
        console.log(numItemsInCart, 'wow wahts this');
        set(atomFamilyState(consensusAddress), {
          delegator: delegatorAddress,
          validator: validatorAddress,
        });
      });
    });
  };

  // const setProfiles = async (data: ValidatorAddressesQuery) => {
  //   if (chainConfig.extra.profile) {
  //     let profiles = [];
  //     data?.validator?.filter((x) => x.validatorInfo).forEach((x) => {
  //       const delegatorAddress = x.validatorInfo.selfDelegateAddress;
  //       profiles.push(fetchDesmosProfile(delegatorAddress));
  //     });

  //     profiles = await Promise.allSettled(profiles);

  //     data?.validator?.filter((x) => x.validatorInfo).forEach((x, i) => {
  //       const delegatorAddress = x.validatorInfo.selfDelegateAddress;
  //       const [_, setProfile] = useRecoilState(writeProfile(delegatorAddress));

  //       const profile = R.pathOr(undefined, [i, 'value'], profiles);

  //       if (profile) {
  //         // sets profile priority
  //         const moniker = R.pathOr(undefined, ['nickname'], profile)
  //         || R.pathOr('', ['validatorDescriptions', 0, 'moniker'], x);
  //         const imageUrl = (
  //           R.pathOr('', ['imageUrl'], profile)
  //           || R.pathOr('', ['validatorDescriptions', 0, 'avatarUrl'], x)
  //         );

  //         setProfile({
  //           moniker,
  //           imageUrl,
  //         });
  //       } else {
  //         setProfile(false);
  //       }
  //     });
  //   }
  // };
};

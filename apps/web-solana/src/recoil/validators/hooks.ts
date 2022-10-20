/* eslint-disable max-len */
import { useState } from 'react';
import {
  useRecoilCallback,
} from 'recoil';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';
// import {
//   atomFamilyState as validatorAtomState,
// } from '@recoil/validators';
import {
  atomFamilyState as profileAtomFamilyState,
} from '@recoil/profiles';

export const useValidatorRecoil = () => {
  const [loading, setLoading] = useState(true);

  useValidatorAddressesQuery({
    onError: (error) => {
      console.error(error.message);
      setLoading(false);
    },
    onCompleted: async (data) => {
      setLoading(false);
      // formatValidatorsAddressList(data);
      setProfiles(data);
    },
  });

  // Don't know if we need to keep a dict of all the voter accounts yet
  //
  // const formatValidatorsAddressList = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
  //   data.validator.filter((x) => x.validatorConfig).forEach((x) => {
  //     set(validatorAtomState(x.address), {
  //       address: x.address,
  //       node: x.node
  //     });
  //   });
  // });

  const setProfiles = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    data.validator.filter((x) => x.validatorConfig).forEach((x) => {
      const { validatorConfig } = x;
      const {
        name, avatarUrl,
      } = validatorConfig;

      let moniker = '';
      if (name.replace(/ /g, '').length && name !== '""') {
        moniker = name;
      }

      const imageUrl = avatarUrl || '';
      set(profileAtomFamilyState(x.address), {
        moniker: moniker || x.address,
        imageUrl,
      }); // vote account
    });
  });

  return {
    loading,
  };
};

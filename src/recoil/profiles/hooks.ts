/* eslint-disable max-len */
import { useRecoilState } from 'recoil';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';

import {
  writeValidator,
} from '@recoil/validators';

export const useValidatorRecoil = () => {
  useValidatorAddressesQuery({
    onError: (error) => {
      console.error(error.message);
    },
    onCompleted: async (data) => {
      formatValidatorsAddressList(data);
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
};

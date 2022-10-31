// import numeral from 'numeral';
// import { chainConfig } from 'ui/dist';
// import { useRouter } from 'next/router';
// import {
//   VALIDATOR_DETAILS,
//   ACCOUNT_DETAILS,
//   BLOCK_DETAILS,
//   TRANSACTION_DETAILS,
//   PROFILE_DETAILS,
// } from '@utils/go_to_page';
import {
  useRecoilCallback,
} from 'recoil';
// import { readValidator } from '@recoil/validators';
// import { toast } from 'react-toastify';

export const useSearchBar = (_t) => {
  // const router = useRouter();

  // eslint-disable-next-line
  const handleOnSubmit = useRecoilCallback(({ snapshot }) => (
    async (value: string, clear?: () => void) => {
      // const consensusRegex = `^(${chainConfig.prefix.consensus})`;
      // const validatorRegex = `^(${chainConfig.prefix.validator})`;
      // const userRegex = `^(${chainConfig.prefix.account})`;
      // const parsedValue = value.replace(/\s+/g, '');

      // if (new RegExp(consensusRegex).test(parsedValue)) {
      //   const validatorAddress = await snapshot.getPromise(readValidator(parsedValue));
      //   if (validatorAddress) {
      //     router.push(VALIDATOR_DETAILS(validatorAddress.validator));
      //   } else {
      //     toast(t('common:useValidatorAddress'));
      //   }
      // } else if (new RegExp(validatorRegex).test(parsedValue)) {
      //   router.push(VALIDATOR_DETAILS(parsedValue));
      // } else if (new RegExp(userRegex).test(parsedValue)) {
      //   router.push(ACCOUNT_DETAILS(parsedValue));
      // } else if (/^@/.test(parsedValue)) {
      //   const configProfile = chainConfig.profile;
      //   if (!configProfile) {
      //     toast(t('common:profilesNotEnabled'));
      //   } else if (parsedValue === '@') {
      //     toast(t('common:insertValidDtag'));
      //   } else {
      //     router.push(PROFILE_DETAILS(parsedValue));
      //   }
      // } else if (/^-?\d+$/.test(numeral(parsedValue).value())) {
      //   router.push(BLOCK_DETAILS(numeral(parsedValue).value()));
      // } else {
      //   router.push(TRANSACTION_DETAILS(parsedValue));
      // }

      if (clear) {
        clear();
      }
    }
  ));

  return {
    handleOnSubmit,
  };
};

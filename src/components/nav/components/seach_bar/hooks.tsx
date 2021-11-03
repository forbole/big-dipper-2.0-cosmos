import { chainConfig } from '@configs';
import { useRouter } from 'next/router';
import {
  VALIDATOR_DETAILS,
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import {
  useRecoilCallback,
} from 'recoil';
import { readValidator } from '@recoil/validators';
import { toast } from 'react-toastify';

export const useSearchBar = (t) => {
  const router = useRouter();

  const handleOnSubmit = useRecoilCallback(({ snapshot }) => (
    async (value: string, clear?: () => void) => {
      const consensusRegex = `^(${chainConfig.prefix.consensus})`;
      const validatorRegex = `^(${chainConfig.prefix.validator})`;
      const userRegex = `^(${chainConfig.prefix.account})`;

      // consensus
      if (new RegExp(consensusRegex).test(value)) {
        const validatorAddress = await snapshot.getPromise(readValidator(value));
        if (validatorAddress) {
          router.push(VALIDATOR_DETAILS(validatorAddress.validator));
        } else {
          toast(t('common:useValidatorAddress'));
        }
      } else if (new RegExp(validatorRegex).test(value)) {
        router.push(VALIDATOR_DETAILS(value));
      } else if (new RegExp(userRegex).test(value)) {
        router.push(ACCOUNT_DETAILS(value));
      } else if (/^-?\d+$/.test(value)) {
        router.push(BLOCK_DETAILS(value));
      } else {
        router.push(TRANSACTION_DETAILS(value));
      }

      if (clear) {
        clear();
      }
    }
  ));

  return {
    handleOnSubmit,
  };
};

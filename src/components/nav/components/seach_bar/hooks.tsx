import { chainConfig } from '@src/chain_config';
import { useRouter } from 'next/router';
import { useChainContext } from '@contexts';
import {
  VALIDATOR_DETAILS,
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { toast } from 'react-toastify';

export const useSearchBar = (t) => {
  const { findOperator } = useChainContext();
  const router = useRouter();
  const handleOnSubmit = (value: string, clear?: () => void) => {
    const consensusRegex = `^(${chainConfig.prefix.consensus})`;
    const validatorRegex = `^(${chainConfig.prefix.validator})`;
    const userRegex = `^(${chainConfig.prefix.account})`;

    // consensus
    if (new RegExp(consensusRegex).test(value)) {
      const validatorAddress = findOperator(value);
      if (validatorAddress) {
        router.push(VALIDATOR_DETAILS(validatorAddress));
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
  };

  return {
    handleOnSubmit,
  };
};

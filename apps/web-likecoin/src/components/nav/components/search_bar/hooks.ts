import chainConfig from '@/chainConfig';
import { readValidator } from '@/recoil/validators';
import {
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  PROFILE_DETAILS,
  TRANSACTION_DETAILS,
  VALIDATOR_DETAILS,
} from '@/utils/go_to_page';
import { isValidAddress } from '@/utils/prefix_convert';
import { Translate } from 'next-translate';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { toast } from 'react-toastify';
import { useRecoilCallback } from 'recoil';

const { extra, prefix } = chainConfig();

export const useSearchBar = (t: Translate) => {
  const router = useRouter();

  const handleOnSubmit = useRecoilCallback(
    ({ snapshot }) =>
      async (value: string, clear?: () => void) => {
        const consensusRegex = `^(${prefix.consensus})`;
        const validatorRegex = `^(${prefix.validator})`;
        const userRegex = `^(${prefix.account})`;
        const cosmosUserRegex = '^(cosmos)';
        const parsedValue = value.replace(/\s+/g, '');

        if (new RegExp(consensusRegex).test(parsedValue)) {
          const validatorAddress = await snapshot.getPromise(readValidator(parsedValue));
          if (validatorAddress) {
            router.push(VALIDATOR_DETAILS(validatorAddress.validator));
          } else {
            toast(t('common:useValidatorAddress'));
          }
        } else if (new RegExp(validatorRegex).test(parsedValue)) {
          if (isValidAddress(parsedValue)) {
            router.push(VALIDATOR_DETAILS(parsedValue));
          } else {
            toast(t('common:invalidAddress'));
          }
        } else if (
          new RegExp(userRegex).test(parsedValue) ||
          new RegExp(cosmosUserRegex).test(parsedValue)
        ) {
          if (isValidAddress(parsedValue)) {
            router.push(ACCOUNT_DETAILS(parsedValue));
          } else {
            toast(t('common:invalidAddress'));
          }
        } else if (/^@/.test(parsedValue)) {
          const configProfile = extra.profile;
          if (!configProfile) {
            toast(t('common:profilesNotEnabled'));
          } else if (parsedValue === '@') {
            toast(t('common:insertValidDtag'));
          } else {
            router.push(PROFILE_DETAILS(parsedValue));
          }
        } else if (/^-?\d+$/.test(String(numeral(parsedValue).value()))) {
          router.push(BLOCK_DETAILS(String(numeral(parsedValue).value())));
        } else {
          router.push(TRANSACTION_DETAILS(parsedValue));
        }

        if (clear) {
          clear();
        }
      }
  );

  return {
    handleOnSubmit,
  };
};

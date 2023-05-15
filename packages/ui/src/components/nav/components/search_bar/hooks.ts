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
import type { TFunction } from '@/hooks/useAppTranslation';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { toast } from 'react-toastify';
import { useRecoilCallback } from 'recoil';

const { extra, prefix } = chainConfig();
const consensusRegex = new RegExp(`^(${prefix.consensus})`);
const validatorRegex = new RegExp(`^(${prefix.validator})`);
const userRegex = new RegExp(`^(${prefix.account})`);

export const useSearchBar = (t: TFunction) => {
  const router = useRouter();

  const handleOnSubmit = useRecoilCallback(
    ({ snapshot }) =>
      async (value: string, clear?: () => void) => {
        const parsedValue = value.replace(/\s+/g, '');

        if (consensusRegex.test(parsedValue)) {
          const validatorAddress = await snapshot.getPromise(readValidator(parsedValue));
          if (validatorAddress) {
            router.push(VALIDATOR_DETAILS(validatorAddress.validator));
          } else {
            toast<string>(t('common:useValidatorAddress'));
          }
        } else if (validatorRegex.test(parsedValue)) {
          if (isValidAddress(parsedValue)) {
            router.push(VALIDATOR_DETAILS(parsedValue));
          } else {
            toast<string>(t('common:invalidAddress'));
          }
        } else if (userRegex.test(parsedValue)) {
          if (isValidAddress(parsedValue)) {
            router.push(ACCOUNT_DETAILS(parsedValue));
          } else {
            toast<string>(t('common:invalidAddress'));
          }
        } else if (/^@/.test(parsedValue)) {
          const configProfile = extra.profile;
          if (!configProfile) {
            toast<string>(t('common:profilesNotEnabled'));
          } else if (parsedValue === '@') {
            toast<string>(t('common:insertValidDtag'));
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
      },
    [router, t]
  );

  return {
    handleOnSubmit,
  };
};

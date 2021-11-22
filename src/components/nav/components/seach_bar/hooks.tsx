import numeral from 'numeral';
import { chainConfig } from '@configs';
import { useRouter } from 'next/router';
import {
  VALIDATOR_DETAILS,
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  TRANSACTION_DETAILS,
  PROFILE_DETAILS,
} from '@utils/go_to_page';
import {
  useRecoilCallback,
} from 'recoil';
import { readValidator } from '@recoil/validators';
import { toast } from 'react-toastify';
import { useDesmosProfile } from '@hooks';

export const useSearchBar = (t) => {
  const router = useRouter();

  // method 1: for react not show error
  const {
    fetchDtag, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      // return fetchDtag(data);
      console.log('data ====> ', data);
      return formatDesmosProfile(data);
    },
  });

  // mothod 2: the way i think should be correct
  // const {
  //   fetchDtag,
  // } = useDesmosProfile({
  //   onComplete: (data) => {
  //     console.log('data ====> ', data);
  //     return fetchDtag(data);
  //   },
  // });

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
      } else if (/^-?\d+$/.test(numeral(value).value())) {
        router.push(BLOCK_DETAILS(numeral(value).value()));
      } else if (/^@/.test(value)) {
        const dtag = await fetchDtag(value);
        console.log('dtag from searchBar hooks => ', dtag);

        if (dtag) {
          router.push(PROFILE_DETAILS(value));
        } else {
          toast(t('common:profilesNotEnabled'));
        }
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

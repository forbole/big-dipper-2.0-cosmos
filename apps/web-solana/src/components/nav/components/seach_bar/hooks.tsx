import numeral from 'numeral';
import { useRouter } from 'next/router';
import bs58 from 'bs58';
import {
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import {
  useRecoilCallback,
} from 'recoil';

export const useSearchBar = () => {
  const router = useRouter();

  const isAccount = (value: string): boolean => {
    try {
      const decoded = bs58.decode(value);
      const bytes = Buffer.byteLength(decoded);
      return bytes === 32;
    } catch {
      return false;
    }
  };

  const isBlock = (value: string): boolean => {
    return /^-?\d+$/.test(numeral(value).value());
  };

  const handleOnSubmit = useRecoilCallback(() => (
    async (value: string, clear?: () => void) => {
      if (isAccount(value)) {
        router.push(ACCOUNT_DETAILS(value));
      } else if (isBlock(value)) {
        router.push(BLOCK_DETAILS(numeral(value).value()));
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

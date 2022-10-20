import { useRouter } from 'next/router';
import {
  ACCOUNT_DETAILS,
} from '@utils/go_to_page';

export const useSearchBar = (_t) => {
  const router = useRouter();

  const handleOnSubmit = (value: string, clear?: () => void) => {
    router.push(ACCOUNT_DETAILS(value));
    if (clear) {
      clear();
    }
  };

  return {
    handleOnSubmit,
  };
};

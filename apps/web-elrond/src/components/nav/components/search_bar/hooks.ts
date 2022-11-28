import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import { useRouter } from 'next/router';

export const useSearchBar = () => {
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

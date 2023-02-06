import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';

export const useSearchBar = () => {
  const router = useRouter();

  const handleOnSubmit = useCallback(
    (value: string, clear?: () => void) => {
      router.push(ACCOUNT_DETAILS(value));
      if (clear) {
        clear();
      }
    },
    [router]
  );

  return {
    handleOnSubmit,
  };
};

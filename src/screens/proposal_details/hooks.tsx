import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';

export const useTokenDetails = () => {
  const router = useRouter();
  // eslint-disable-next-line
  const [token, setToken] = useState<string>(R.pathOr('', ['query', 'token'], router));

  return {
    token,
  };
};

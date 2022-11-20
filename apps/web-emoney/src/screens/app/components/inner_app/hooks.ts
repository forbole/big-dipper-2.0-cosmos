import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dayjs from 'ui/utils/dayjs';
import { toast } from 'react-toastify';
import * as R from 'ramda';
import { LazyQueryHookOptions, LazyQueryResultTuple } from '@apollo/client';

export type UseLatestBlockTimestampLazyQuery<TData, TVariables> = (
  baseOptions?: LazyQueryHookOptions<TData, TVariables>
) => LazyQueryResultTuple<TData, TVariables>;

const isClient = typeof window === 'object';

export function useChainHealthCheck<TData, TVariables>(
  useLatestBlockTimestampLazyQuery: UseLatestBlockTimestampLazyQuery<TData, TVariables>
) {
  const { t } = useTranslation('common');
  const [chainActive, setChainActive] = useState(true);

  const [getLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
    onCompleted: (data) => {
      const timestamp = (dayjs as any).utc(R.pathOr('', ['block', 0, 'timestamp'], data));
      const timeNow = (dayjs as any).utc();
      const timeDifference = timeNow.diff(timestamp, 's');
      // if latest block has been over two minute ago
      if (timeDifference > 120 && chainActive) {
        toast.error(
          t('blockTimeAgo', {
            time: (dayjs as any).utc(timestamp).fromNow(),
          }),
          {
            autoClose: false,
          }
        );
        setChainActive(false);
      }
    },
  });

  useEffect(() => {
    if (!isClient) return;
    getLatestBlockTimestamp();
  }, [getLatestBlockTimestamp]);
}

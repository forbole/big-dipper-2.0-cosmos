import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dayjs from '@/utils/dayjs';
import { toast } from 'react-toastify';
import { useLatestBlockTimestampLazyQuery } from '@/graphql/types/general_types';

const isClient = typeof window === 'object';

export function useChainHealthCheck() {
  const [chainActive, setChainActive] = useState(true);
  const { t } = useTranslation('common');
  const [getLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
    onCompleted: (data) => {
      const timestamp = dayjs.utc(data?.block?.[0]?.timestamp ?? '');
      const timeNow = dayjs.utc();
      const timeDifference = timeNow.diff(timestamp, 's');
      // if latest block has been over a minute ago
      if (timeDifference > 60 && chainActive) {
        toast.error(
          t('blockTimeAgo', {
            time: dayjs.utc(timestamp).fromNow(),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

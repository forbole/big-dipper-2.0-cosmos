import {
  useEffect,
  useState,
} from 'react';
import useTranslation from 'next-translate/useTranslation';
import dayjs from '@utils/dayjs';
import { toast } from 'react-toastify';
import * as R from 'ramda';
import { useLatestBlockTimestampLazyQuery } from '@graphql/types';

export const useChainHealthCheck = () => {
  const { t } = useTranslation('common');
  const [chainActive, setChainActive] = useState(true);
  const isClient = typeof window === 'object';

  const [useLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
    onCompleted: (data) => {
      const timestamp = dayjs.utc(R.pathOr('', ['block', 0, 'timestamp'], data));
      const timeNow = dayjs.utc();
      const timeDifference = timeNow.diff(timestamp, 's');
      // if latest block has been over a minute ago
      if (timeDifference > 60 && chainActive) {
        toast.error(t('blockTimeAgo', {
          time: dayjs.utc(timestamp).fromNow(),
        }), {
          autoClose: false,
        });
        setChainActive(false);
      }
    },
  });

  useEffect((): any => {
    if (!isClient) {
      return false;
    }
    useLatestBlockTimestamp();
  }, []);
};

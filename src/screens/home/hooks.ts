import dayjs from '@utils/dayjs';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import * as R from 'ramda';
import { useLatestBlockTimestampQuery } from '@graphql/types';

export const useHome = () => {
  const { t } = useTranslation('common');
  const [chainActive, setChainActive] = useState(true);

  useLatestBlockTimestampQuery({
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
};

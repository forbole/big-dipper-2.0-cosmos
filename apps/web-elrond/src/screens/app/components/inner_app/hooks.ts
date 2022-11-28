// import { useEffect, useState } from 'react';
// import useTranslation from 'next-translate/useTranslation';
// import dayjs from '@/utils/dayjs';
// import { toast } from 'react-toastify';
// import * as R from 'ramda';

// const  isClient = typeof window === 'object';

export const useChainHealthCheck = () => {
  // const { t } = useTranslation('common');
  // const [_chainActive, _setChainActive] = useState(true);
  // const [useLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
  //   onCompleted: (data) => {
  //     const timestamp = dayjs.utc(data?.block?.[0]?.timestamp ?? '');
  //     const timeNow = dayjs.utc();
  //     const timeDifference = timeNow.diff(timestamp, 's');
  //     // if latest block has been over a minute ago
  //     if (timeDifference > 60 && chainActive) {
  //       toast.error(t('blockTimeAgo', {
  //         time: dayjs.utc(timestamp).fromNow(),
  //       }), {
  //         autoClose: false,
  //       });
  //       setChainActive(false);
  //     }
  //   },
  // });
  // useEffect(() => {
  //   if (!isClient) return;
  //   // useLatestBlockTimestamp();
  // }, []);
};

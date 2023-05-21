// import { useEffect, useState } from 'react';
// import useAppTranslation from '@/hooks/useAppTranslation';
// import dayjs from '@/utils/dayjs';
// import { toast } from 'react-toastify';
// import * as R from 'ramda';

// const  isClient = typeof window === 'object';

export const useChainHealthCheck = () => {
  // const { t } = useAppTranslation('common');
  // const [_chainActive, _setChainActive] = useState(true);
  // const [useLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
  //   onCompleted: (data) => {
  //     const timestamp = dayjs.utc(data?.block?.[0]?.timestamp ?? '');
  //     const timeNow = dayjs.utc();
  //     const timeDifference = timeNow.diff(timestamp, 's');
  //     // if latest block has been over a minute ago
  //     if (timeDifference > 60 && chainActive) {
  //       toast.error<string>(t('blockTimeAgo', {
  //         time: <Timestamp timestamp={timestamp} isUnix />,
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

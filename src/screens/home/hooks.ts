// console.log(data, 'data');
//       const timestamp = R.pathOr('', ['height', 0, 'timestamp'], data.subscriptionData.data);
//       dayjs.utc(timestamp).fromNow();
import dayjs from '@utils/dayjs';
import { chainConfig } from '@configs';
import { toast } from 'react-toastify';
import { useState } from 'react';
import * as R from 'ramda';
import {
  useLatestBlockTimestampQuery,
  LatestBlockTimestampQuery,
} from '@graphql/types';

export const useHome = () => {
  const [chainActive, setChainActive] = useState(true);

  useLatestBlockTimestampQuery({
    onCompleted: (data) => {
      const timestamp = dayjs.utc('2021-06-25T03:23:27.762512');
      // dayjs.utc(data?.block[0]?.timestamp);
      const timeNow = dayjs.utc();
      const timeDifference = timeNow.diff(timestamp, 's');
      // const timeDifferenceMinutes = timeNow.diff(timestamp, 'm');
      console.log(timeNow.diff(timestamp, 's'), 'diff');
      // if latest block has been over a minute ago
      if (timeDifference > 60) {
        toast(`latest block was ${dayjs.utc(timestamp).fromNow()}`);
      }
      // data?.block[0]?.timestamp;

      // setState((prevState) => ({
      //   ...prevState,
      //   blockTime: formatAverageBlockTime(data),
      // }));
    },
  });
};

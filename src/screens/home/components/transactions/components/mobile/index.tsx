import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Divider, Typography,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useTransactionsContext } from '@src/screens/home/components/transactions/contexts/transactions';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import {
  SingleTransactionMobile, Result,
} from '@components';

const Mobile:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { transactions } = useTransactionsContext();
  const formatSlots = transactions.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      block: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" component="a">
            {x.block}
          </Typography>
        </Link>
      ),
      hash: (
        <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
          <Typography variant="body1" component="a">
            {getMiddleEllipsis(x.hash, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      time: dayjs(x.time).fromNow(),
    });
  });

  return (
    <div className={classnames(className)}>
      {formatSlots.map((x, i) => {
        return (
          <React.Fragment key={`${x.slot}-${i}`}>
            <SingleTransactionMobile {...x} />
            {i !== formatSlots.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

import SingleTransactionMobile from '@/components/single_transaction_mobile';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC, Fragment } from 'react';

import type { TransactionType } from '@/screens/home/components/transactions/types';

type MobileProps = {
  className?: string;
  items: TransactionType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const formattedData = items.map((x) => ({
    key: x.height,
    block: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 15,
            ending: 5,
          })}
        </Typography>
      </Link>
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
    // messages: numeral(x.messages).format('0,0'),
  }));

  return (
    <div className={classnames(className)}>
      {formattedData.map((x, i) => (
        <Fragment key={x.key}>
          <SingleTransactionMobile {...x} />
          {i !== formattedData.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;

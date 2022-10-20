import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  SingleTransactionMobile, Result,
} from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';

import { TransactionType } from '../../types';

const Mobile:React.FC<{
  className?: string;
  items: TransactionType[];
}> = ({
  className, items,
}) => {
  const formattedData = items.map((x) => {
    return ({
      slot: (
        <Link href={BLOCK_DETAILS(x.slot)} passHref>
          <Typography variant="body1" component="a">
            {numeral(x.slot).format('0,0')}
          </Typography>
        </Link>
      ),
      signature: (
        <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
          <Typography variant="body1" component="a">
            {getMiddleEllipsis(x.signature, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      time: dayjs.utc(x.timestamp).fromNow(),
    });
  });

  return (
    <div className={classnames(className)}>
      {formattedData.map((x, i) => {
        return (
          <React.Fragment key={`${x.slot}-${i}`}>
            <SingleTransactionMobile {...x} />
            {i !== formattedData.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

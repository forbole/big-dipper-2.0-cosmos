import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SingleTransactionMobile from '@components/single_transaction_mobile';
import Tag from 'ui/components/tag';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from 'ui/utils/go_to_page';

import type { TransactionType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: TransactionType[];
}> = ({ className, items }) => {
  const formattedData = items.map((x: any) => {
    return {
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
      type: (
        <div>
          <Tag value={x.type?.[0]} theme="six" />
          {x.messages > 1 && ` + ${x.messages - 1}`}
        </div>
      ),
      time: (dayjs as any).utc(x.timestamp).fromNow(),
    };
  });

  return (
    <div className={classnames(className)}>
      {formattedData.map((x, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${x.block}-${i}`}>
            <SingleTransactionMobile {...x} />
            {i !== formattedData.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

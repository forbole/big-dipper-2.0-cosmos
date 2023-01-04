import SingleBlockMobile from '@/components/single_block_mobile';
import type { BlockType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC, Fragment } from 'react';

const Mobile: FC<{
  className?: string;
  items: BlockType[];
}> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => {
      const isLast = i === items.length - 1;
      return (
        <Fragment key={x.height}>
          <SingleBlockMobile
            height={
              <Link href={BLOCK_DETAILS(x.height)} passHref>
                <Typography variant="body1" className="value" component="a">
                  {numeral(x.height).format('0,0')}
                </Typography>
              </Link>
            }
            txs={numeral(x.txs).format('0,0')}
            time={dayjs.utc(x.timestamp).fromNow()}
            hash={getMiddleEllipsis(x.hash, {
              beginning: 13,
              ending: 10,
            })}
          />
          {!isLast && <Divider />}
        </Fragment>
      );
    })}
  </div>
);

export default Mobile;

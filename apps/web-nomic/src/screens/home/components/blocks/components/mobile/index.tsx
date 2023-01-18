import SingleBlockMobile from '@/components/single_block_mobile';
import type { BlockType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, Fragment } from 'react';

const Mobile: FC<{
  className?: string;
  items: BlockType[];
}> = ({ className, items }) => (
  <div className={className}>
    {items?.map((x, i) => {
      const isLast = i === items.length - 1;
      return (
        <Fragment key={x.height}>
          <SingleBlockMobile
            height={
              <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)} className="value">
                {numeral(x.height).format('0,0')}
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

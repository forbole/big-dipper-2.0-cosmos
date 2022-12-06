import SingleBlockMobile from '@/components/single_block_mobile';
import type { BlockType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react';

const Mobile: React.FC<{
  className?: string;
  items: BlockType[];
}> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={`${x.height}-${i}`}>
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
        {!!items && i !== items.length - 1 && <Divider />}
      </React.Fragment>
    ))}
  </div>
);

export default Mobile;

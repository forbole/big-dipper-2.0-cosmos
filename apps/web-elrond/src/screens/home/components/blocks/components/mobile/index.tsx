import React from 'react';
import numeral from 'numeral';
import dayjs from '@/utils/dayjs';
import Link from 'next/link';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import SingleBlockMobile from '@/components/single_block_mobile';
import type { BlockType } from '@/screens/home/components/blocks/types';

const Mobile: React.FC<{ items: BlockType[] } & ComponentDefault> = (props) => {
  const formattedItems = props.items.map((x) => ({
    block: numeral(x.block).format('0,0'),
    hash: (
      <Link href={BLOCK_DETAILS(x.hash)} passHref>
        <Typography variant="body1" className="value" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 13,
            ending: 15,
          })}
        </Typography>
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: (dayjs as any).utc(dayjs.unix(x.timestamp)).fromNow(),
  }));

  return (
    <div>
      {formattedItems?.map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`${x.block}-${i}`}>
          <SingleBlockMobile {...x} />
          {i !== formattedItems.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;

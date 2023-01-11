import SingleBlockMobile from '@/components/single_block_mobile';
import type { BlockType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, Fragment } from 'react';

const Mobile: FC<{ className?: string; items: BlockType[] }> = (props) => {
  const formattedItems = props.items.map((x) => ({
    block: numeral(x.block).format('0,0'),
    hash: (
      <Link shallow href={BLOCK_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 13,
          ending: 15,
        })}
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
  }));

  return (
    <div>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.block}>
          <SingleBlockMobile {...x} />
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;

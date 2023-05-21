import SingleBlockMobile from '@/components/single_block_mobile';
import Timestamp from '@/components/Timestamp';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getShardDisplay } from '@/utils/get_shard_display';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, Fragment } from 'react';

const Mobile: FC<{ className?: string; items: BlockType[] }> = (props) => {
  const { t } = useAppTranslation('blocks');
  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return {
      key: x.hash,
      block: numeral(x.block).format('0,0'),
      shard: t(shard.key, {
        num: shard.num,
      }),
      hash: (
        <Link shallow prefetch={false} href={BLOCK_DETAILS(x.hash)} className="value">
          {getMiddleEllipsis(x.hash, {
            beginning: 13,
            ending: 15,
          })}
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: <Timestamp timestamp={x.timestamp} isUnix />,
    };
  });

  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <SingleBlockMobile {...x} />
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;

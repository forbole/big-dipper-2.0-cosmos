import React from 'react';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { getShardDisplay } from '@utils/get_shard_display';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import SingleBlockMobile from '@components/single_block_mobile';

const Mobile: React.FC<{ items: BlockType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return {
      block: numeral(x.block).format('0,0'),
      shard: t(shard.key, {
        num: shard.num,
      }),
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
    };
  });
  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${x.block}-${i}`}>
            <SingleBlockMobile {...x} />
            {i !== formattedItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

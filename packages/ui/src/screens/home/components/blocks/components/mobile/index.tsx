import AvatarName from '@/components/avatar_name';
import SingleBlockMobile from '@/components/single_block_mobile';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import type { ItemType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC } from 'react';

type Props = {
  className?: string;
  items: ItemType[];
};

const BlocksItem: FC<{ item: ItemType; i: number; items: ItemType[] }> = ({ item, i, items }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);
  return (
    <React.Fragment key={`${i}-${item.height}`}>
      <SingleBlockMobile
        height={
          <Link href={BLOCK_DETAILS(item.height)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(item.height).format('0,0')}
            </Typography>
          </Link>
        }
        txs={numeral(item.txs).format('0,0')}
        time={dayjs.utc(item.timestamp).fromNow()}
        proposer={<AvatarName address={address} imageUrl={imageUrl} name={name} />}
        hash={getMiddleEllipsis(item.hash, {
          beginning: 13,
          ending: 10,
        })}
      />
      {!!items && i !== items.length - 1 && <Divider />}
    </React.Fragment>
  );
};

const Mobile: FC<Props> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <BlocksItem key={i} item={x} i={i} items={items} />
    ))}
  </div>
);

export default Mobile;

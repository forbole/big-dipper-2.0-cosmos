import AvatarName from '@/components/avatar_name';
import SingleBlockMobile from '@/components/single_block_mobile';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import type { ItemType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC, Fragment } from 'react';

type BlocksItemProps = {
  item: ItemType;
  i: number;
  isLast: boolean;
};

const BlocksItem: FC<BlocksItemProps> = ({ item, i, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);
  return (
    <Fragment key={`${i}-${item.height}`}>
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
      {!isLast && <Divider />}
    </Fragment>
  );
};

type MobileProps = {
  className?: string;
  items: ItemType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => (
  <div className={className}>
    {items?.map((x, i) => (
      <BlocksItem key={x.height} item={x} i={i} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;

import AvatarName from '@/components/avatar_name';
import SingleBlockMobile from '@/components/single_block_mobile';
import Timestamp from '@/components/Timestamp';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import type { ItemType } from '@/screens/home/components/blocks/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, Fragment } from 'react';

type BlocksItemProps = {
  item: ItemType;
  i: number;
  isLast: boolean;
};

const BlocksItem: FC<BlocksItemProps> = ({ item, i, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);
  return (
    <Fragment key={`${i}-${item.hash}`}>
      <SingleBlockMobile
        height={
          <Link shallow prefetch={false} href={BLOCK_DETAILS(item.height)} className="value">
            {numeral(item.height).format('0,0')}
          </Link>
        }
        txs={numeral(item.txs).format('0,0')}
        time={<Timestamp timestamp={item.timestamp} />}
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
      <BlocksItem key={x.hash} item={x} i={i} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;

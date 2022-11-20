import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Link from 'next/link';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import SingleBlockMobile from 'ui/components/single_block_mobile';
import AvatarName from 'ui/components/avatar_name';
import type { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => (
    <div className={classnames(className)}>
      {items?.map((x, i) => (
          <React.Fragment key={`${x.height}-${x.timestamp}`}>
            <SingleBlockMobile
              height={
                <Link href={BLOCK_DETAILS(x.height)} passHref>
                  <Typography variant="body1" className="value" component="a">
                    {numeral(x.height).format('0,0')}
                  </Typography>
                </Link>
              }
              txs={numeral(x.txs).format('0,0')}
              time={(dayjs as any).utc(x.timestamp).fromNow()}
              proposer={
                <AvatarName
                  address={x.proposer.address}
                  imageUrl={x.proposer.imageUrl}
                  name={x.proposer.name}
                />
              }
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

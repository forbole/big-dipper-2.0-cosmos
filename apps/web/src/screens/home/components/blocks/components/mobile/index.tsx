import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  Typography, Divider,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  SingleBlockMobile,
  AvatarName,
} from '@components';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className, items,
}) => {
  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`${x.height}-${i}`}>
            <SingleBlockMobile
              height={(
                <Link href={BLOCK_DETAILS(x.height)} passHref>
                  <Typography variant="body1" className="value" component="a">
                    {numeral(x.height).format('0,0')}
                  </Typography>
                </Link>
              )}
              txs={numeral(x.txs).format('0,0')}
              time={dayjs.utc(x.timestamp).fromNow()}
              proposer={(
                <AvatarName
                  address={x.proposer.address}
                  imageUrl={x.proposer.imageUrl}
                  name={x.proposer.name}
                />
              )}
              hash={getMiddleEllipsis(x.hash, {
                beginning: 13, ending: 10,
              })}
            />
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

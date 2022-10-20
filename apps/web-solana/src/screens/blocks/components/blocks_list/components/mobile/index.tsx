import React from 'react';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import numeral from 'numeral';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  Typography, Divider,
} from '@material-ui/core';
import {
  AvatarName,
  SingleBlockMobile,
} from '@components';
import {
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { useStyles } from './styles';
import { ItemType } from '../../../../types';

const Mobile: React.FC<{items: ItemType[]} & ComponentDefault> = (props) => {
  const classes = useStyles();
  const items = props.items.map((x) => ({
    slot: (
      <Link href={BLOCK_DETAILS(x.slot)} passHref>
        <Typography variant="body1" className="value" component="a">
          {numeral(x.slot).format('0,0')}
        </Typography>
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(x.timestamp).fromNow(),
    leader: (
      <AvatarName
        address={x.leader.address}
        imageUrl={x.leader.imageUrl}
        name={x.leader.name}
      />
    ),
    hash: getMiddleEllipsis(x.hash, {
      beginning: 13, ending: 10,
    }),
  }));

  return (
    <div className={props.className}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`${x.time}-${i}`}>
            <div className={classes.root}>
              <SingleBlockMobile {...x} />
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

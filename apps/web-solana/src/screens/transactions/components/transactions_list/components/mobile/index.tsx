import React from 'react';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import numeral from 'numeral';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  Typography, Divider,
} from '@material-ui/core';
import {
  Result, SingleTransactionMobile,
} from '@components';
import {
  TRANSACTION_DETAILS,
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { useStyles } from './styles';

const Mobile: React.FC<{items: Transactions[]} & ComponentDefault> = (props) => {
  const classes = useStyles();
  const items = props.items.map((x) => ({
    slot: (
      <Link href={BLOCK_DETAILS(x.slot)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.slot).format('0,0')}
        </Typography>
      </Link>
    ),
    signature: (
      <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.signature, {
            beginning: 15, ending: 5,
          })}
        </Typography>
      </Link>
    ),
    result: (
      <Result success={x.success} />
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
    instructions: numeral(x.numInstructions).format('0,0'),
  }));

  return (
    <div className={props.className}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`${x.time}-${i}`}>
            <div className={classes.root}>
              <SingleTransactionMobile {...x} />
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

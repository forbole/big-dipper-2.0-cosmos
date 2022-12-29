import AvatarName from '@/components/avatar_name';
import Result from '@/components/result';
import { useStyles } from '@/screens/home/components/transactions/components/mobile/styles';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';

const Mobile: FC<{ items: TransactionType[] }> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formattedItems = props.items.map((x) => ({
    key: x.hash,
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" className="value" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 13,
            ending: 15,
          })}
        </Typography>
      </Link>
    ),
    from: (
      <AvatarName
        address={x.from}
        name={getMiddleEllipsis(x.from, {
          beginning: 13,
          ending: 15,
        })}
      />
    ),
    to: (
      <AvatarName
        address={x.to}
        name={getMiddleEllipsis(x.to, {
          beginning: 13,
          ending: 15,
        })}
      />
    ),
    status: <Result status={x.status} />,
    time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
  }));

  return (
    <div>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <div className={classes.root}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('hash')}
              </Typography>
              {x.hash}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('from')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.from}
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('to')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.to}
              </Typography>
            </div>
            <div className={classes.flex}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('status')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.status}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('time')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.time}
                </Typography>
              </div>
            </div>
          </div>
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;

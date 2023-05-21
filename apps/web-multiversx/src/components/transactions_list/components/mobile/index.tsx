import AvatarName from '@/components/avatar_name';
import Result from '@/components/result';
import Timestamp from '@/components/Timestamp';
import useStyles from '@/components/transactions_list/components/mobile/styles';
import Shard from '@/components/transactions_list/components/shard';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, Fragment } from 'react';

const Mobile: FC<{ className?: string; items: TransactionType[] }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();
  const formattedItems = props.items.map((x) => ({
    key: x.hash,
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 13,
          ending: 15,
        })}
      </Link>
    ),
    shard: <Shard to={x.toShard} from={x.fromShard} />,
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
    time: <Timestamp timestamp={x.timestamp} isUnix />,
  }));

  return (
    <div className={props.className}>
      {formattedItems.map((x, i) => (
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
                {t('shard')}
              </Typography>
              {x.shard}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('from')}
              </Typography>
              {x.from}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('to')}
              </Typography>
              {x.to}
            </div>
            <div className={classes.flex}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('status')}
                </Typography>
                {x.status}
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

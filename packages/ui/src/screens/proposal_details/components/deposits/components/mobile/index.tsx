import AvatarName from '@/components/avatar_name';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/proposal_details/components/deposits/components/mobile/styles';
import type { ItemType } from '@/screens/proposal_details/components/deposits/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const formattedItems =
    items?.map((x) => ({
      depositor: x.user.address ? (
        <AvatarName address={x.user.address} imageUrl={x.user.imageUrl} name={x.user.name} />
      ) : (
        <>-</>
      ),
      amount: `${formatNumber(
        x.amount.value,
        x.amount.exponent
      )} ${x.amount.displayDenom.toUpperCase()}`,
      time: formatDayJs(dayjs.utc(x.timestamp), dateFormat),
    })) ?? [];

  return (
    <div className={classnames(className)}>
      {formattedItems?.map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`depositors-mobile-${i}`}>
          <div className={classes.list}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('depositor')}
              </Typography>
              {x.depositor}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('amount')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.amount}
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
          {!!items && i !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;

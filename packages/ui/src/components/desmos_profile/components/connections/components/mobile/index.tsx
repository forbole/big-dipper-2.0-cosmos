import useStyles from '@/components/desmos_profile/components/connections/components/mobile/styles';
import { readDate } from '@/recoil/settings';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, Fragment } from 'react';
import { useRecoilValue } from 'recoil';

type MobileProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const { classes } = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={className}>
      {items?.map((x, i) => {
        const isLast = !items || i === items.length - 1;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`votes-mobile-${x.identifier}-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('network')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.network.toUpperCase()}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('identifier')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.identifier}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('creationTime')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.creationTime), dateFormat)}
                </Typography>
              </div>
            </div>
            {!isLast && <Divider />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

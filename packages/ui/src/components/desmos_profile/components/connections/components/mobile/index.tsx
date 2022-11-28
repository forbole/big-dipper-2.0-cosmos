import { useStyles } from '@/components/desmos_profile/components/connections/components/mobile/styles';
import { readDate } from '@/recoil/settings';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Mobile: React.FC<{
  className?: string;
  items?: ProfileConnectionType[];
}> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {items?.map((x, i) => (
        <React.Fragment key={`votes-mobile-${x.identifier}`}>
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
          {!!items && i !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;

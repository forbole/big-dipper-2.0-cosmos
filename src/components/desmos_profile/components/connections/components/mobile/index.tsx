import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { useSettingsContext } from '@contexts';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: ConnectionType[];
}> = ({
  className, items,
}) => {
  const {
    dateFormat,
  } = useSettingsContext();
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
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
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;

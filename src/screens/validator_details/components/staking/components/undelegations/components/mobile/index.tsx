import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { AvatarName } from '@components';
import { useSettingsContext } from '@contexts';
import {
  Divider, Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { UndelegationType } from '../../../../../../types';

const Mobile: React.FC<{
  className?: string;
  items: UndelegationType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const {
    dateFormat,
  } = useSettingsContext();
  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                <AvatarName
                  address={x.delegator.address}
                  imageUrl={x.delegator.imageUrl}
                  name={x.delegator.name}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('amount')}
                </Typography>
                <Typography variant="body1" className="value">
                  {`${numeral(x.amount.value).format('0,0.[0000]')} ${x.amount.denom.toUpperCase()}`}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('linkedUntil')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.linkedUntil), dateFormat)}
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

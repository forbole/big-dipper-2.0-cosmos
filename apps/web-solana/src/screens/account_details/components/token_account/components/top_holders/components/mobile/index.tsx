import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { formatNumber } from '@utils/format_token';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({
  className, items,
}) => {
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
                  {t('holder')}
                </Typography>
                <AvatarName
                  name={x.holder.name}
                  address={x.holder.address}
                  imageUrl={x.holder.imageUrl}
                />
              </div>
              <div className={classes.flex}>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('amount')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {formatNumber(x.amount, x.decimals)}
                  </Typography>
                </div>
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

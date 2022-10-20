import React from 'react';
import classnames from 'classnames';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const Token: React.FC<{
  className?: string;
  token: React.ReactNode;
  price: string;
  marketCap: string;
  volume: string;
}> = ({
  className, token, price, marketCap, volume,
}) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('token')}
        </Typography>
        {token}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('price')}
        </Typography>
        <Typography variant="body1" className="value">
          {price}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('marketCap')}
        </Typography>
        <Typography variant="body1" className="value">
          {marketCap}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('volume')}
        </Typography>
        <Typography variant="body1" className="value">
          {volume}
        </Typography>
      </div>
    </div>
  );
};

export default Token;

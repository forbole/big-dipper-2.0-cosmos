import React from 'react';
import classnames from 'classnames';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const SingleTransactionMobile:React.FC<{
  className?: string;
  slot: React.ReactNode;
  signature: React.ReactNode;
  time: string;
  instructions?: string;
  result?: React.ReactNode;
}> = ({
  className, slot, signature, time, instructions, result,
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('slot')}
        </Typography>
        {slot}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('signature')}
        </Typography>
        <Typography variant="body1" className="value">
          {signature}
        </Typography>
      </div>
      <div className={classes.flex}>
        {!!instructions && (
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('instructions')}
          </Typography>
          <Typography variant="body1" className="value">
            {instructions}
          </Typography>
        </div>
        )}
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('result')}
          </Typography>
          {result}
        </div>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('time')}
        </Typography>
        <Typography variant="body1" className="value">
          {time}
        </Typography>
      </div>
    </div>
  );
};

export default SingleTransactionMobile;

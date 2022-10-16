import React from 'react';
import classnames from 'classnames';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const SingleBlockMobile: React.FC<{
  className?: string;
  height: React.ReactNode;
  hash: string;
  parentHash?: string;
  txs: string;
  time: string;
  proposer: React.ReactNode;
}> = ({
  className, height, hash, parentHash, txs, time, proposer,
}) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('height')}
        </Typography>
        {height}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('proposer')}
        </Typography>
        {proposer}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hash')}
        </Typography>
        <Typography variant="body1" className="value">
          {hash}
        </Typography>
      </div>
      {parentHash && (
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('parentHash')}
          </Typography>
          <Typography variant="body1" className="value">
            {parentHash}
          </Typography>
        </div>
      )}
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('txs')}
          </Typography>
          <Typography variant="body1" className="value">
            {txs}
          </Typography>
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
    </div>
  );
};

export default SingleBlockMobile;

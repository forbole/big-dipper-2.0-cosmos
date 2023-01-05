import useStyles from '@/components/single_block_mobile/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

type SingleBlockMobileProps = {
  className?: string;
  height: ReactNode;
  hash: string;
  parentHash?: string;
  txs: string;
  time: string;
  proposer: ReactNode;
};

const SingleBlockMobile: FC<SingleBlockMobileProps> = ({
  className,
  height,
  hash,
  parentHash,
  txs,
  time,
  proposer,
}) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, classes.root)}>
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

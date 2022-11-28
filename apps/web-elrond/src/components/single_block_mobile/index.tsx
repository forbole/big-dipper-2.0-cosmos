import { useStyles } from '@/components/single_block_mobile/styles';
import type { SingleBlockMobileType } from '@/components/single_block_mobile/types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const SingleBlockMobile: React.FC<SingleBlockMobileType & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <div className={classnames(props.className, classes.root)}>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('block')}
          </Typography>
          {props.block}
        </div>
        {props.shard && (
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('shard')}
            </Typography>
            {props.shard}
          </div>
        )}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hash')}
        </Typography>
        <Typography variant="body1" className="value">
          {props.hash}
        </Typography>
      </div>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('txs')}
          </Typography>
          <Typography variant="body1" className="value">
            {props.txs}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('time')}
          </Typography>
          <Typography variant="body1" className="value">
            {props.time}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SingleBlockMobile;

import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { SingleBlockMobileType } from './types';

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

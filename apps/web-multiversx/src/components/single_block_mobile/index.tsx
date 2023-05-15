import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import type { SingleBlockMobileType } from '@/components/single_block_mobile/types';
import useStyles from '@/components/single_block_mobile/styles';

const SingleBlockMobile: FC<SingleBlockMobileType & ComponentDefault> = (props) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, props.className)}>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('block')}
          </Typography>
          {props.block}
        </div>
        {!!props.shard && (
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

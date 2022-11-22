import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ArrowForward } from '@material-ui/icons';
import { getShardDisplay } from '@utils/get_shard_display';
import { useStyles } from './styles';

const Shard: React.FC<{to: number, from: number} & ComponentDefault> = (props) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const from = getShardDisplay(props.from);
  const to = getShardDisplay(props.to);
  return (
    <div className={classes.root}>
      {t(from.key, {
        num: from.num,
      })}
      <ArrowForward className={classes.icon} />
      {t(to.key, {
        num: to.num,
      })}
    </div>
  );
};

export default Shard;

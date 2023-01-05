import useStyles from '@/components/transactions_list/components/shard/styles';
import { getShardDisplay } from '@/utils/get_shard_display';
import { ArrowForward } from '@mui/icons-material';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Shard: FC<{ to: number; from: number }> = (props) => {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
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

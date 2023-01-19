import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { getShardDisplay } from '@/utils/get_shard_display';
import useStyles from '@/components/transactions_list/components/shard/styles';

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
      <ArrowForwardIcon className={classes.icon} />
      {t(to.key, {
        num: to.num,
      })}
    </div>
  );
};

export default Shard;

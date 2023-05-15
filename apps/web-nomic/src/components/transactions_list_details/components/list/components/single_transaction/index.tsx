import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, ReactNode } from 'react';
import useStyles from '@/components/transactions_list_details/components/list/components/single_transaction/styles';

type SingleTransactionProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  time: string;
};

const SingleTransaction: FC<SingleTransactionProps> = ({ className, block, hash, time }) => {
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.timeContainer}>
        <Typography variant="body1" className="value">
          {hash}
        </Typography>
      </div>
      <div className={classes.itemContainer}>
        <div className={classes.itemPrimaryDetailsContainer}>
          <div className={cx(classes.item, 'block')}>
            <Typography variant="h4" className="label">
              {t('block')}
            </Typography>
            {block}
          </div>
          <div className={cx(classes.item, 'time')}>
            <Typography variant="h4" className="label">
              {t('time')}
            </Typography>
            <Typography variant="body1" className="value">
              {time}
            </Typography>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default SingleTransaction;

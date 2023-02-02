import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, ReactNode } from 'react';
import useStyles from '@/components/single_transaction_mobile/styles';

type SingleTransactionMobileProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  time: string;
};

const SingleTransactionMobile: FC<SingleTransactionMobileProps> = ({
  className,
  block,
  hash,
  time,
}) => {
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        {block}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hash')}
        </Typography>
        <Typography variant="body1" className="value">
          {hash}
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
  );
};

export default SingleTransactionMobile;

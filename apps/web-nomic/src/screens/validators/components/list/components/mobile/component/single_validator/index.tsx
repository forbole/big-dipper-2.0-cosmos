import useStyles from '@/screens/validators/components/list/components/mobile/component/single_validator/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

type SingleValidatorProps = {
  className?: string;
  validator: ReactNode;
  commission: string;
  votingPower: ReactNode;
  status: {
    status: string;
    theme: string;
  };
};

const SingleValidator: FC<SingleValidatorProps> = ({
  className,
  validator,
  commission,
  votingPower,
  status,
}) => {
  const { t } = useTranslation('validators');
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('validator')}
        </Typography>
        {validator}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        {votingPower}
      </div>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('inActiveSet')}
          </Typography>
          <Typography variant="body1" className={cx('value', 'status', status.theme)}>
            {status.status}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography variant="body1" className="value">
            {commission}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SingleValidator;

import useStyles from '@/screens/validators/components/list/components/mobile/component/single_validator/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';
import LiquidStakingFalseIcon from 'shared-utils/assets/liquid-staking-false.svg';
import LiquidStakingTrueIcon from 'shared-utils/assets/liquid-staking-true.svg';

type SingleValidatorProps = {
  className?: string;
  validator: ReactNode;
  commission: string;
  votingPower: ReactNode;
  status: {
    status: string;
    theme: string;
  };
  liquidStaking: string;
};

const SingleValidator: FC<SingleValidatorProps> = ({
  className,
  validator,
  commission,
  votingPower,
  status,
  liquidStaking,
}) => {
  const { t } = useTranslation('validators');
  const { classes, cx } = useStyles();
  return (
    <div className={cx(className, classes.root)}>
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
            {t('status')}
          </Typography>
          <Typography variant="body1" className={cx('value', 'status', status.theme)}>
            {t(status.status)}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('liquidStaking')}
          </Typography>
          <Typography variant="body1" className="value">
            {liquidStaking === 'Yes' ? <LiquidStakingTrueIcon /> : <LiquidStakingFalseIcon />}
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

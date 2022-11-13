import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import LiquidStakingTrueIcon from 'shared-utils/assets/liquid-staking-true.svg';
import LiquidStakingFalseIcon from 'shared-utils/assets/liquid-staking-false.svg';
import { useStyles } from './styles';

const SingleValidator: React.FC<{
  className?: string;
  validator: React.ReactNode;
  commission: string;
  votingPower: React.ReactNode;
  status: {
    status: string;
    theme: string;
  };
  liquidStaking: string;
}> = ({ className, validator, commission, votingPower, status, liquidStaking }) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
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
          <Typography variant="body1" className={classnames('value', 'status', status.theme)}>
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

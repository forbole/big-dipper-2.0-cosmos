import { useStyles } from '@/screens/validators/components/list/components/validators/components/mobile/component/single_validator/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';

type SingleValidatorProps = {
  className?: string;
  idx: string;
  validator: ReactNode;
  locked: ReactNode;
  // stake: string;
  nodes: string;
  delegators: string;
  commission: string;
  apr: string;
};

const SingleValidator: FC<SingleValidatorProps> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <div className={classnames(props.className, classes.root)}>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('idx')}
          </Typography>
          <Typography variant="body1" className="value">
            {props.idx}
          </Typography>
        </div>
        {/* <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('stake')}
          </Typography>
          {props.stake}
        </div> */}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('validator')}
        </Typography>
        {props.validator}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('locked')}
        </Typography>
        {props.locked}
      </div>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('delegators')}
          </Typography>
          {props.delegators}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('nodes')}
          </Typography>
          <Typography variant="body1" className="value">
            {props.nodes}
          </Typography>
        </div>
      </div>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('apr')}
          </Typography>
          {props.apr}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          {props.commission}
        </div>
      </div>
    </div>
  );
};

export default SingleValidator;

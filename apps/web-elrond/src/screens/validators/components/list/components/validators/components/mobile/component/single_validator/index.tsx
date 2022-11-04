import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SingleValidator: React.FC<{
  className?: string;
  idx: string;
  validator: React.ReactNode;
  locked: React.ReactNode;
  stake: string;
  nodes: string;
  delegators: string;
  commission: string;
  apr: string;
}> = (props) => {
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

import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const ConditionExplanation = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();

  const conditions = [
    {
      display: '90% - 100%',
      className: 'green',
    },
    {
      display: '70% - 90%',
      className: 'yellow',
    },
    {
      display: '1% - 70%',
      className: 'red',
    },
    {
      display: '0%',
      className: '',
    },
  ];
  return (
    <div className={classes.root}>
      <Typography>
        {t('conditionExplanation')}
      </Typography>
      <div className={classes.itemWrapper}>
        {conditions.map((x) => {
          return (
            <div className={classes.item} key={x.display}>
              <Typography>{x.display}</Typography>
              <div className={classnames(classes.condition, x.className)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConditionExplanation;

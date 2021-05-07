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
      display: '90% >= 100%',
      className: 'green',
    },
    {
      display: '70% > 90%',
      className: 'yellow',
    },
    {
      display: '0% > 70%',
      className: 'red',
    },
  ];
  return (
    <div className={classes.root}>
      <Typography>
        {t('conditionExplanation')}
      </Typography>
      <div>
        {conditions.map((x) => {
          return (
            <div key={x.display}>
              <Typography variant="caption">{x.display}</Typography>
              <div className={classnames('condition', x.className)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConditionExplanation;

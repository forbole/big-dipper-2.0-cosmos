import React from 'react';
import BoxDetails from 'ui/components/box_details';
import useTranslation from 'next-translate/useTranslation';
import { ActionType } from '../../types';
import { useStyles } from './styles';

const Action: React.FC<ActionType & ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const details = [
    {
      label: t('category'),
      detail: props.category.toUpperCase(),
    },
    {
      label: t('name'),
      detail: props.name.replace(/([A-Z])/g, ' $1').toUpperCase(),
    },
    {
      label: t('description'),
      detail: props.description.toUpperCase(),
      className: classes.description,
    },
  ];

  return <BoxDetails className={props.className} title={t('action')} details={details} />;
};

export default Action;

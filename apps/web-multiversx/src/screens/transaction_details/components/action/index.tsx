import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import BoxDetails from '@/components/box_details';
import useStyles from '@/screens/transaction_details/components/action/styles';
import type { ActionType } from '@/screens/transaction_details/types';

const Action: FC<ActionType & ComponentDefault> = (props) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('transactions');

  const details = [
    {
      key: 'category',
      label: t('category'),
      detail: props.category.toUpperCase(),
    },
    {
      key: 'name',
      label: t('name'),
      detail: props.name.replace(/([A-Z])/g, ' $1').toUpperCase(),
    },
    {
      key: 'description',
      label: t('description'),
      detail: props.description.toUpperCase(),
      className: classes.description,
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('action') ?? undefined} details={details} />
  );
};

export default Action;

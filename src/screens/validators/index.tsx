import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Validators = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <Layout navTitle={t('validators')} className={classes.root}>
      <List />
    </Layout>
  );
};

export default Validators;

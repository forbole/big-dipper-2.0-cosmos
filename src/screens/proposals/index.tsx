import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Tokens = () => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();

  return (
    <Layout navTitle={t('tokens')} className={classes.root}>
      <List />
    </Layout>
  );
};

export default Tokens;

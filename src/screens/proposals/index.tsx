import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Proposals = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();

  return (
    <Layout navTitle={t('proposals')} className={classes.root}>
      <List />
    </Layout>
  );
};

export default Proposals;

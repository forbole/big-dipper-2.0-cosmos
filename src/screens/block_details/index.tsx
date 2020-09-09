import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@components';
import {
  Overview, Transactions,
} from './components';
import { useStyles } from './styles';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <Layout navTitle={t('blockDetails')} className={classes.root}>
      <Overview />
      <Transactions />
    </Layout>
  );
};

export default BlockDetails;

import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  return (
    <Layout navTitle={t('blocks')} className={classes.root}>
      <List />
    </Layout>
  );
};

export default Blocks;

import React from 'react';
import {
  Layout,
} from '@components';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import { List } from './components';
import { useStyles } from './styles';
import { useIscns } from './hooks';

const Iscns = () => {
  const { t } = useTranslation('iscns');
  const classes = useStyles();
  const {
    state,
    loadMoreItems,
    itemCount,
    isItemLoaded,
  } = useIscns();

  return (
    <>
      <NextSeo
        title={t('iscns')}
        openGraph={{
          title: t('iscns'),
        }}
      />
      <Layout
        navTitle={t('iscns')}
        className={classes.root}
      >
        <List
          items={state.items}
          rawDataTotal={state.rawDataTotal}
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        />
      </Layout>
    </>
  );
};

export default Iscns;

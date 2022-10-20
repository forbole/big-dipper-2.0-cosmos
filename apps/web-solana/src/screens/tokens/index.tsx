import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';
import { useProposals } from './hooks';

const Tokens = () => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    state,
    handleSearch,
    handleSort,
    sortItems,
  } = useProposals();

  const items = sortItems(state.items);

  return (
    <>
      <NextSeo
        title={t('tokens')}
        openGraph={{
          title: t('tokens'),
        }}
      />
      <Layout
        navTitle={t('tokens')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <List
            items={items}
            handleSearch={handleSearch}
            isItemLoaded={() => true}
            itemCount={items.length}
            loadMoreItems={() => null}
            handleSort={handleSort}
            sortDirection={state.sortDirection}
            sortKey={state.sortKey}
          />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Tokens;

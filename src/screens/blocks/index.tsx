import React from 'react';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  Box,
  NotFound,
  LinearLoading,
} from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    state,
    loadMoreItems,
    itemCount,
    isItemLoaded,
  } = useBlocks();

  let component = null;

  if (state.loading) {
    component = <LinearLoading />;
  } else if (!state.exists && !state.loading) {
    component = <NotFound />;
  } else {
    component = (
      <Box className={classes.box}>
        {isDesktop ? (
          <Desktop
            items={state.items}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        ) : (
          <Mobile
            items={state.items}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        )}
      </Box>
    );
  }

  return (
    <Layout
      title={t('blocks')}
      navTitle={t('blocks')}
      className={classes.root}
    >
      {component}
    </Layout>
  );
};

export default Blocks;

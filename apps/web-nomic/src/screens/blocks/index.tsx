import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/blocks/styles';
import { useBlocks } from '@/screens/blocks/hooks';
import type DesktopType from '@/screens/blocks/components/desktop';
import type MobileType from '@/screens/blocks/components/mobile';

const Desktop = dynamic(() => import('@/screens/blocks/components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('@/screens/blocks/components/mobile')) as typeof MobileType;

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useBlocks();

  let box: ReactNode = null;

  if (!state.items.length) {
    box = <NoData />;
  } else if (isDesktop) {
    box = (
      <Desktop
        items={state.items}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        isItemLoaded={isItemLoaded}
      />
    );
  } else {
    box = (
      <Mobile
        items={state.items}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        isItemLoaded={isItemLoaded}
      />
    );
  }

  return (
    <>
      <NextSeo
        title={t('blocks')}
        openGraph={{
          title: t('blocks'),
        }}
      />
      <Layout navTitle={t('blocks')} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Box className={classes.box}>{box}</Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Blocks;

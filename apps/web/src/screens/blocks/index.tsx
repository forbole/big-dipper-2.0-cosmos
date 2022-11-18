import React from 'react';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from 'ui/components/layout';
import Box from 'ui/components/box';
import LoadAndExist from 'ui/components/load_and_exist';
import NoData from 'ui/components/no_data';
import { useScreenSize } from 'ui/hooks';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import { useStyles } from './styles';
import { useBlocks } from './hooks';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useBlocks();

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.proposer));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return {
      ...(x as object),
      proposer: proposerProfiles[i],
    };
  });

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
          <Box className={classes.box}>
            {!state.items.length ? (
              <NoData />
            ) : (
              <>
                {isDesktop ? (
                  <Desktop
                    items={mergedDataWithProfiles as any}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                    isItemLoaded={isItemLoaded}
                  />
                ) : (
                  <Mobile
                    items={mergedDataWithProfiles as any}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                    isItemLoaded={isItemLoaded}
                  />
                )}
              </>
            )}
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Blocks;

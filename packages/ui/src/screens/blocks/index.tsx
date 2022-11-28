import Box from '@/components/box';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import type DesktopType from '@/screens/blocks/components/desktop';
import type MobileType from '@/screens/blocks/components/mobile';
import { useBlocks } from '@/screens/blocks/hooks';
import { useStyles } from '@/screens/blocks/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Desktop = dynamic(() => import('@/screens/blocks/components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('@/screens/blocks/components/mobile')) as typeof MobileType;

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useBlocks();

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.proposer));
  const mergedDataWithProfiles = state.items.map((x, i) => ({
    ...x,
    proposer: proposerProfiles[i],
  }));

  let box: ReactNode;

  if (!state.items.length) {
    box = <NoData />;
  } else if (isDesktop) {
    box = (
      <Desktop
        items={mergedDataWithProfiles}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        isItemLoaded={isItemLoaded}
      />
    );
  } else {
    box = (
      <Mobile
        items={mergedDataWithProfiles}
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

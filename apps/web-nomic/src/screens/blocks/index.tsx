import Box from '@/components/box';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import Desktop from '@/screens/blocks/components/desktop';
import Mobile from '@/screens/blocks/components/mobile';
import { useBlocks } from '@/screens/blocks/hooks';
import useStyles from '@/screens/blocks/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import { ReactNode } from 'react';

const Blocks = () => {
  const { t } = useAppTranslation('blocks');
  const { classes } = useStyles();
  const display = useDisplayStyles().classes;
  const { state, loadMoreItems, itemCount, isItemLoaded } = useBlocks();

  let box: ReactNode = null;

  if (!state.items.length) {
    box = <NoData />;
  } else {
    box = (
      <>
        <Desktop
          className={display.hiddenUntilLg}
          items={state.items}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        />
        <Mobile
          className={display.hiddenWhenLg}
          items={state.items}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        />
      </>
    );
  }

  return (
    <>
      <NextSeo
        title={t('blocks') ?? undefined}
        openGraph={{
          title: t('blocks') ?? undefined,
        }}
      />
      <Layout navTitle={t('blocks') ?? undefined} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Box className={classes.box}>{box}</Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Blocks;

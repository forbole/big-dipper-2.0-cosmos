import Box from '@/components/box';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import Desktop from '@/screens/blocks/components/desktop';
import Mobile from '@/screens/blocks/components/mobile';
import { useBlocks } from '@/screens/blocks/hooks';
import useStyles from '@/screens/blocks/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { ReactNode } from 'react';

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { classes } = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useBlocks();

  let box: ReactNode;

  if (!state.items.length) {
    box = <NoData />;
  } else {
    box = (
      <>
        <Desktop
          items={state.items}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
          className={classes.hiddenUntilLg}
        />
        <Mobile
          items={state.items}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
          className={classes.hiddenWhenLg}
        />
      </>
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

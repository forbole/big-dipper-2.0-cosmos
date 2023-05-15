import InfiniteList from '@/components/InfiniteList';
import Layout from '@/components/layout';
import HeaderDesktop from '@/screens/assets/components/HeaderDesktop';
import RowDesktop from '@/screens/assets/components/RowDesktop';
import RowMobile from '@/screens/assets/components/RowMobile';
import SearchBox from '@/screens/assets/components/SearchBox';
import { useAssets } from '@/screens/assets/hooks';
import useStyles, { HEIGHT_DESKTOP, HEIGHT_MOBILE } from '@/screens/assets/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import useAppTranslation from '@/hooks/useAppTranslation';
import { NextSeo } from 'next-seo';
import { useCallback, useDeferredValue, useMemo, useRef, useState } from 'react';

const Assets = () => {
  const { t } = useAppTranslation('assets');
  const { classes, cx, theme } = useStyles();

  const title = t('assetsModule');
  const description = t('description');
  const display = useDisplayStyles().classes;
  const heightMobile = useMemo(() => parseInt(theme.spacing(HEIGHT_MOBILE), 10), [theme]);
  const heightDesktop = useMemo(() => parseInt(theme.spacing(HEIGHT_DESKTOP), 10), [theme]);
  const rowHeightMobile = useCallback(() => heightMobile, [heightMobile]);
  const rowHeightDesktop = useCallback(() => heightDesktop, [heightDesktop]);

  const [searchText, setSearchText] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);
  const searchTextDeferred = useDeferredValue(searchText);
  const { cursor, variables, refetch, items, itemsPerPage, maxFetched, itemCount } =
    useAssets(searchTextDeferred);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Layout navTitle={title} className={classes.root}>
        <Paper className={classes.paper} ref={containerRef}>
          <Grid2 container columns={12}>
            <Grid2 xs={12} lg={6} paddingBottom={theme.spacing(1)}>
              <Typography variant="h1" title={description} aria-label={description}>
                {t('assets')}
              </Typography>
            </Grid2>
            <Grid2 xs={12} lg={6} textAlign={{ lg: 'right' }} sx={{ paddingY: 1 }}>
              <SearchBox searchText={searchText} handleChange={handleChange} />
            </Grid2>
          </Grid2>
          <InfiniteList
            className={cx(classes.list, display.hiddenWhenLg)}
            cursor={cursor}
            variables={variables}
            refetch={refetch}
            items={items}
            itemsPerPage={itemsPerPage}
            maxFetched={maxFetched}
            itemCount={itemCount}
            rowHeight={rowHeightMobile}
            RowComponent={RowMobile}
            autoScrollElement={containerRef.current}
            disablePagination
          />
          <InfiniteList
            className={cx(classes.list, display.hiddenUntilLg)}
            cursor={cursor}
            variables={variables}
            refetch={refetch}
            items={items}
            itemsPerPage={itemsPerPage}
            maxFetched={maxFetched}
            itemCount={itemCount}
            rowHeight={rowHeightDesktop}
            HeaderComponent={HeaderDesktop}
            RowComponent={RowDesktop}
            autoScrollElement={containerRef.current}
            disablePagination
          />
        </Paper>
      </Layout>
    </>
  );
};

export default Assets;

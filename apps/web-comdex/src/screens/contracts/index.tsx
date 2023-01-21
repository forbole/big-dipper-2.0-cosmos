import InfiniteList from '@/components/InfiniteList';
import Layout from '@/components/layout';
import HeaderDesktop from '@/screens/contracts/components/HeaderDesktop';
import RowDesktop from '@/screens/contracts/components/RowDesktop';
import RowMobile from '@/screens/contracts/components/RowMobile';
import SearchBox from '@/screens/contracts/components/SearchBox';
import { useContracts } from '@/screens/contracts/hooks';
import useStyles, { HEIGHT_DESKTOP, HEIGHT_MOBILE } from '@/screens/contracts/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useDeferredValue, useMemo, useRef, useState } from 'react';

const Contracts = () => {
  const { t } = useTranslation('contracts');
  const { classes, cx, theme } = useStyles();

  const title = t('contractModule');
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
  const { variables, refetch, items, itemsPerPage, itemCount } = useContracts(searchTextDeferred);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Layout navTitle={title} className={classes.root}>
        <Paper className={classes.paper} ref={containerRef}>
          <Grid2 container columns={12}>
            <Grid2 xs={12} lg={6}>
              <Typography variant="h1">{t('contracts')}</Typography>
            </Grid2>
            <Grid2 xs={12} lg={6} textAlign={{ lg: 'right' }}>
              <SearchBox searchText={searchText} handleChange={handleChange} />
            </Grid2>
          </Grid2>
          <Typography variant="subtitle1" className={classes.description}>
            {description}
          </Typography>
          <InfiniteList
            className={cx(classes.list, display.hiddenWhenLg)}
            variables={variables}
            refetch={refetch}
            items={items}
            itemsPerPage={itemsPerPage}
            itemCount={itemCount}
            rowHeight={rowHeightMobile}
            RowComponent={RowMobile}
            autoScrollElement={containerRef.current}
          />
          <InfiniteList
            className={cx(classes.list, display.hiddenUntilLg)}
            variables={variables}
            refetch={refetch}
            items={items}
            itemsPerPage={itemsPerPage}
            itemCount={itemCount}
            rowHeight={rowHeightDesktop}
            HeaderComponent={HeaderDesktop}
            RowComponent={RowDesktop}
            autoScrollElement={containerRef.current}
          />
        </Paper>
      </Layout>
    </>
  );
};

export default Contracts;

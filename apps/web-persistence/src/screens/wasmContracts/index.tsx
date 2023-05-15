import InfiniteList from '@/components/InfiniteList';
import Layout from '@/components/layout';
import ContractHeaderDesktop from '@/screens/wasmContracts/components/ContractHeaderDesktop';
import ContractRowDesktop from '@/screens/wasmContracts/components/ContractRowDesktop';
import ContractRowMobile from '@/screens/wasmContracts/components/ContractRowMobile';
import ContractSearchBox from '@/screens/wasmContracts/components/ContractSearchBox';
import { useWasmContracts } from '@/screens/wasmContracts/hooks';
import useStyles, { HEIGHT_DESKTOP, HEIGHT_MOBILE_CONTRACT } from '@/screens/wasmContracts/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import useAppTranslation from '@/hooks/useAppTranslation';
import { NextSeo } from 'next-seo';
import { ChangeEvent, useCallback, useDeferredValue, useMemo, useRef, useState } from 'react';

const WasmContracts = () => {
  const { t } = useAppTranslation('wasm_contracts');
  const { classes, cx, theme } = useStyles();

  const title = t('wasmContracts');
  const description = t('description');
  const display = useDisplayStyles().classes;
  const heightDesktop = useMemo(() => parseInt(theme.spacing(HEIGHT_DESKTOP), 10), [theme]);
  const rowHeightDesktop = useCallback(() => heightDesktop, [heightDesktop]);

  const [searchText, setSearchText] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);
  const searchTextDeferred = useDeferredValue(searchText);
  const containerRef = useRef<HTMLDivElement>(null);

  const wasmContractState = useWasmContracts(searchTextDeferred);
  const heightMobileContract = useMemo(
    () => parseInt(theme.spacing(HEIGHT_MOBILE_CONTRACT), 10),
    [theme]
  );
  const rowHeightMobileContract = useCallback(() => heightMobileContract, [heightMobileContract]);

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Layout navTitle={title} className={classes.root}>
        <Paper className={classes.paper} ref={containerRef}>
          <Grid2 container columns={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Grid2 xs={12} textAlign={{ lg: 'right' }} sx={{ paddingY: 1 }}>
              <ContractSearchBox searchText={searchText} handleChange={handleChange} />
            </Grid2>
          </Grid2>
          <InfiniteList
            className={cx(classes.list, display.hiddenWhenLg)}
            cursor={wasmContractState.cursor}
            variables={wasmContractState.variables}
            refetch={wasmContractState.refetch}
            items={wasmContractState.items}
            itemsPerPage={wasmContractState.itemsPerPage}
            maxFetched={wasmContractState.maxFetched}
            itemCount={wasmContractState.itemCount}
            rowHeight={rowHeightMobileContract}
            RowComponent={ContractRowMobile}
            autoScrollElement={containerRef.current}
            disablePagination
          />
          <InfiniteList
            className={cx(classes.list, display.hiddenUntilLg)}
            cursor={wasmContractState.cursor}
            variables={wasmContractState.variables}
            refetch={wasmContractState.refetch}
            items={wasmContractState.items}
            itemsPerPage={wasmContractState.itemsPerPage}
            maxFetched={wasmContractState.maxFetched}
            itemCount={wasmContractState.itemCount}
            rowHeight={rowHeightDesktop}
            HeaderComponent={ContractHeaderDesktop}
            RowComponent={ContractRowDesktop}
            autoScrollElement={containerRef.current}
            disablePagination
          />
        </Paper>
      </Layout>
    </>
  );
};

export default WasmContracts;

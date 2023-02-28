import InfiniteList from '@/components/InfiniteList';
import Layout from '@/components/layout';
import CodeRowDesktop from '@/screens/wasmContracts/components/CodeRowDesktop';
import CodeRowMobile from '@/screens/wasmContracts/components/CodeRowMobile';
import ContractRowDesktop from '@/screens/wasmContracts/components/ContractRowDesktop';
import ContractRowMobile from '@/screens/wasmContracts/components/ContractRowMobile';
import ContractSearchBox from '@/screens/wasmContracts/components/ContractSearchBox';
import ContractHeaderDesktop from '@/screens/wasmContracts/components/ContractHeaderDesktop';
import CodeHeaderDesktop from '@/screens/wasmContracts/components/CodeHeaderDesktop';
import { useWasmCodes, useWasmContracts } from '@/screens/wasmContracts/hooks';
import useStyles, {
  HEIGHT_DESKTOP,
  HEIGHT_MOBILE_CODE,
  HEIGHT_MOBILE_CONTRACT,
} from '@/screens/wasmContracts/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useDeferredValue,
  useMemo,
  useRef,
  useState,
} from 'react';

const WasmContracts = () => {
  const { t } = useTranslation('wasm_contracts');
  const { classes, cx, theme } = useStyles();
  const [tab, setTab] = useState(0);
  const handleTabChange = (_: SyntheticEvent, newValue: number) => setTab(newValue);

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

  const wasmCodeState = useWasmCodes();
  const heightMobileCode = useMemo(() => parseInt(theme.spacing(HEIGHT_MOBILE_CODE), 10), [theme]);
  const rowHeightMobileCode = useCallback(() => heightMobileCode, [heightMobileCode]);

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Layout navTitle={title} className={classes.root}>
        <Paper className={classes.paper} ref={containerRef}>
          <Grid2 container columns={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Grid2 xs={12} lg={6}>
              <Tabs
                value={tab}
                onChange={handleTabChange}
                title={description}
                aria-label={description}
              >
                <Tab label={t('contracts')} />
                <Tab label={t('codes')} />
              </Tabs>
            </Grid2>
            <Grid2 xs={12} lg={6} textAlign={{ lg: 'right' }} sx={{ paddingY: 1 }}>
              {tab === 0 && (
                <ContractSearchBox searchText={searchText} handleChange={handleChange} />
              )}
              {tab === 1 && <span />}
            </Grid2>
          </Grid2>
          {tab === 0 && (
            <>
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
            </>
          )}
          {tab === 1 && (
            <>
              <InfiniteList
                className={cx(classes.list, display.hiddenWhenLg)}
                cursor={wasmCodeState.cursor}
                variables={wasmCodeState.variables}
                refetch={wasmCodeState.refetch}
                items={wasmCodeState.items}
                itemsPerPage={wasmCodeState.itemsPerPage}
                maxFetched={wasmCodeState.maxFetched}
                itemCount={wasmCodeState.itemCount}
                rowHeight={rowHeightMobileCode}
                RowComponent={CodeRowMobile}
                autoScrollElement={containerRef.current}
              />
              <InfiniteList
                className={cx(classes.list, display.hiddenUntilLg)}
                cursor={wasmCodeState.cursor}
                variables={wasmCodeState.variables}
                refetch={wasmCodeState.refetch}
                items={wasmCodeState.items}
                itemsPerPage={wasmCodeState.itemsPerPage}
                maxFetched={wasmCodeState.maxFetched}
                itemCount={wasmCodeState.itemCount}
                rowHeight={rowHeightDesktop}
                HeaderComponent={CodeHeaderDesktop}
                RowComponent={CodeRowDesktop}
                autoScrollElement={containerRef.current}
              />
            </>
          )}
        </Paper>
      </Layout>
    </>
  );
};

export default WasmContracts;

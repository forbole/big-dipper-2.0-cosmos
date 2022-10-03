import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  Pagination,
  Search,
} from '@components';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import { useStyles } from './styles';
import { ProvidersListState } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

export type ProvidersListProps = ComponentDefault & {
  list: ProvidersListState,
  handleSearch:(value: string) => void,
}

const ProvidersList: React.FC<ProvidersListProps> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({});
  const { handleSearch } = props;

  let component = null;
  // if (props.loading) {
  //   component = <Loading />;
  // } else if (!items.length) {
  //   component = <NoData />;
  // } else if (isDesktop) {
  //   component = <Desktop items={items} />;
  // } else {
  //   component = <Mobile items={items} />;
  // }
  if (isDesktop) {
    component = <Desktop list={props.list.pages[page] || []} />;
  } else {
    component = <Mobile list={props.list.pages[page] || []} />;
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.providerHeader}>
        <Typography variant="h2">
          {t('providers')}
        </Typography>
        <Search
          className={classes.searchBar}
          callback={handleSearch}
          placeholder={t('searchProviders')}
        />
      </div>

      <div className={classes.list}>
        {component}
        {/* <Desktop list={props.list.pages[page] || []} />
        <Mobile list={props.list.pages[page] || []} /> */}
        <Pagination
          className={classes.paginate}
          total={props.list.pagination.totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Box>
  );
};

export default ProvidersList;

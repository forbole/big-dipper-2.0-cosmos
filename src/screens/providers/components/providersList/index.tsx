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
  handleChangePage: () => void,
  handleChangeRowsPerPage: (page: number) => void,
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

  const component = null;
  // if (props.loading) {
  //   component = <Loading />;
  // } else if (!items.length) {
  //   component = <NoData />;
  // } else if (isDesktop) {
  //   component = <Desktop items={items} />;
  // } else {
  //   component = <Mobile items={items} />;
  // }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.providerHeader}>
        <Typography variant="h2">
          {t('title')}
        </Typography>
        <Search
          className={classes.searchBar}
          callback={handleSearch}
          placeholder={t('searchProviders')}
        />
      </div>

      <div className={classes.list}>
        {/* {component} */}
        <Desktop list={props.list.items[page]} />
        <Mobile list={props.list.items[page]} />
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

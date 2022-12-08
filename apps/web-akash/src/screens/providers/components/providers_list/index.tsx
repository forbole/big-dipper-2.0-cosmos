import Box from '@/components/box';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { usePagination, useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/providers/components/providers_list/styles';
import type { ProvidersListState } from '@/screens/providers/types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React from 'react';

const Desktop = dynamic(
  () => import('@/screens/providers/components/providers_list/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/providers/components/providers_list/components/mobile')
);

export interface ProvidersListProps extends ComponentDefault {
  list: ProvidersListState;
  handleSearch: (value: string) => void;
}

const ProvidersList: React.FC<ProvidersListProps> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({
    rowsPage: props.list.pagination.itemsPerPage,
  });
  const { handleSearch } = props;

  let component = null;

  if (isDesktop) {
    component = <Desktop list={props.list.pages[page] || []} />;
  } else {
    component = <Mobile list={props.list.pages[page] || []} />;
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.providerHeader}>
        <Typography variant="h2">{t('providersList')}</Typography>
        <Search
          className={classes.searchBar}
          callback={handleSearch}
          placeholder={t('searchProviders')}
        />
      </div>

      <div className={classes.list}>{component}</div>

      <Pagination
        className={classes.paginate}
        total={props.list.pagination.totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ProvidersList;

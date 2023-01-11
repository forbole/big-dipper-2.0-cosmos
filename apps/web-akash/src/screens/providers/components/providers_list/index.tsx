import Box from '@/components/box';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { usePagination } from '@/hooks';
import Desktop from '@/screens/providers/components/providers_list/components/desktop';
import Mobile from '@/screens/providers/components/providers_list/components/mobile';
import useStyles from '@/screens/providers/components/providers_list/styles';
import type { ProvidersListState } from '@/screens/providers/types';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface ProvidersListProps extends ComponentDefault {
  list: ProvidersListState;
  handleSearch: (value: string) => void;
}

const ProvidersList: FC<ProvidersListProps> = (props) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('providers');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({
    rowsPage: props.list.pagination.itemsPerPage,
  });
  const { handleSearch } = props;

  const component = (
    <>
      <Desktop list={props.list.pages[page] || []} className={classes.hiddenUntilLg} />
      <Mobile list={props.list.pages[page] || []} className={classes.hiddenWhenLg} />
    </>
  );

  return (
    <Box className={cx(classes.root, props.className)}>
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
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default ProvidersList;

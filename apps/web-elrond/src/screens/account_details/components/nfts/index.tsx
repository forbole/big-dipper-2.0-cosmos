import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { usePagination } from '@/hooks';
import Pagination from '@/components/pagination';
import Box from '@/components/box';
import Loading from '@/components/loading';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '@/screens/account_details/components/nfts/styles';
import List from '@/screens/account_details/components/nfts/components/list';
import { useTokens, PAGE_SIZE } from '@/screens/account_details/components/nfts/hooks';

const Tokens: React.FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { state, handlePageChangeCallback } = useTokens();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    return null;
  } else {
    component = <List items={state.items} />;
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">{t('nfts')}</Typography>
      {component}
      <Pagination
        className={classes.paginate}
        total={state.total}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default Tokens;

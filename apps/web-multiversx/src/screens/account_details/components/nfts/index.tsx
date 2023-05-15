import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Box from '@/components/box';
import Loading from '@/components/loading';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import List from '@/screens/account_details/components/nfts/components/list';
import { PAGE_SIZE, useTokens } from '@/screens/account_details/components/nfts/hooks';
import useStyles from '@/screens/account_details/components/nfts/styles';

const Tokens: FC<ComponentDefault> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes, cx } = useStyles();
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
    <Box className={cx(classes.root, props.className)}>
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

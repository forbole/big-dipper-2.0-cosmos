import Box from '@/components/box';
import Loading from '@/components/loading';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks';
import List from '@/screens/account_details/components/tokens/components/list';
import { PAGE_SIZE, useTokens } from '@/screens/account_details/components/tokens/hooks';
import { useStyles } from '@/screens/account_details/components/tokens/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Tokens: FC<ComponentDefault> = (props) => {
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
      <Typography variant="h2">{t('tokens')}</Typography>
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

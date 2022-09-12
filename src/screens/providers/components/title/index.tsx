import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionListDetails,
  TransactionsList,
  Box,
  Pagination,
} from '@components';
import { useRecoilValue } from 'recoil';
import { readTx } from '@recoil/settings';
import {
  usePagination,
  // useScreenSize,
} from '@hooks';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const Title: React.FC<ComponentDefault> = (props) => {
  const txListFormat = useRecoilValue(readTx);
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const {
    // page,
    // rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({});

  const {
    state,
    loadNextPage,
  } = useTransactions();

  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.data.length;
  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('title')}
      </Typography>
      <div className={classes.list}>
        {/* {txListFormat === 'compact' ? (
          <TransactionsList
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        ) : (
          <TransactionListDetails
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        )} */}
        <Pagination
          className={classes.paginate}
          total={30}
          rowsPerPage={10}
          page={0}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Box>
  );
};

export default Title;

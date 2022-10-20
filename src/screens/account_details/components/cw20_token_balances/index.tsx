import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination,
  // Loading,
  Box,
} from '@components';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { Cw20TokenBalance } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Cw20TokenBalances: React.FC<{
  balances: Cw20TokenBalance[],
  loading?: boolean // todo implement loading sth
} & ComponentDefault> = (props) => {
  if (!props.balances?.length) {
    return null;
  }

  const { t } = useTranslation('accounts');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const paginatedBalances = sliceItems(props.balances);

  let component = null;
  if (isDesktop) {
    component = <Desktop balances={paginatedBalances} />;
  } else {
    component = <Mobile balances={paginatedBalances} />;
  }

  return (
    <Box className={classnames(props.className)}>
      <Typography variant="h2">
        {t('cw20tokens')}
      </Typography>
      <div className={classnames(props.className)}>
        {component}
        <Pagination
          className={classes.paginate}
          total={props.balances.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Box>
  );
};

export default Cw20TokenBalances;

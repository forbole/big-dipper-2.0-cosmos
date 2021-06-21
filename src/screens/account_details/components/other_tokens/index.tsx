import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import {
  Pagination,
  Box,
} from '@components';

import {
  usePagination,
  useScreenSize,
} from '@hooks';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { OtherTokenType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

export const OtherTokens: React.FC<{
  className?: string;
  otherTokens: {
    data: OtherTokenType[],
    count: number;
  }
}> = ({
  className,
  otherTokens,
}) => {
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

  const { data } = otherTokens;
  const count = data.length;
  if (!data.length) {
    return null;
  }

  const items = sliceItems(data);

  return (
    <Box className={classnames(className)}>
      <Typography variant="h2">
        {t('otherTokens')}
      </Typography>

      {isDesktop ? (
        <Desktop className={classes.desktop} items={items} />
      ) : (
        <Mobile className={classes.mobile} items={items} />
      )}
      <Pagination
        className={classes.paginate}
        total={count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
};

export default OtherTokens;

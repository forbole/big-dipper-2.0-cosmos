import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  Pagination,
} from '@components';
import {
  usePagination,
  useScreenSize,
} from '@hooks';

import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Providers: React.FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const {
    // page,
    // rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({});

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

  // if (isDesktop) {
  //   component = <Desktop />;
  // } else {
  //   component = <Mobile />;
  // }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('title')}
      </Typography>
      <div className={classes.list}>
        {/* {component} */}
        <Desktop />
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

export default Providers;

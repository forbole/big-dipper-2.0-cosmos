import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { usePagination } from '@hooks';
import { useStyles } from './styles';
import { useProposalContext } from '../../contexts/proposal';
import {
  Desktop,
  Mobile,
  Paginate,
} from './components';

const Deposits: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('proposals');
  const { uiData } = useProposalContext();
  const { deposits = [] } = uiData;

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const classes = useStyles();
  const items = sliceItems(deposits);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">{t('deposits')}</Typography>
      <div className={classes.list}>
        <Mobile className={classes.mobile} items={items} />
        <Desktop className={classes.desktop} items={items} />
      </div>
      <Paginate
        total={deposits.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Deposits;

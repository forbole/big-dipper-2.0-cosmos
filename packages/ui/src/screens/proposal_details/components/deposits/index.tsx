import Box from '@/components/box';
import { usePagination, useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Paginate from '@/screens/proposal_details/components/deposits/components/paginate';
import { useDeposits } from '@/screens/proposal_details/components/deposits/hooks';
import { useStyles } from '@/screens/proposal_details/components/deposits/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React, { FC, useMemo } from 'react';

const Desktop = dynamic(
  () => import('@/screens/proposal_details/components/deposits/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/proposal_details/components/deposits/components/mobile')
);

const Deposits: FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('proposals');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const { state } = useDeposits();
  const classes = useStyles();
  const dataMemo = useShallowMemo(state.data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography className={classes.title} variant="h2">
        {t('deposits')}
      </Typography>
      <div className={classes.list}>
        {isDesktop ? (
          <Desktop className={classes.desktop} items={items} />
        ) : (
          <Mobile className={classes.mobile} items={items} />
        )}
      </div>
      <Paginate
        total={state.data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default Deposits;

import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import Desktop from '@/screens/validator_details/components/nodes/components/desktop';
import Mobile from '@/screens/validator_details/components/nodes/components/mobile';
import { PAGE_SIZE, useBlocks } from '@/screens/validator_details/components/nodes/hooks';
import useStyles from '@/screens/validator_details/components/nodes/styles';

const Nodes: FC<ComponentDefault> = (props) => {
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();
  const { state, handlePageChangeCallback } = useBlocks();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    component = <NoData />;
  } else {
    component = (
      <>
        <Desktop items={state.items} />
        <Mobile items={state.items} />
      </>
    );
  }

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2">{t('nodes')}</Typography>
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

export default Nodes;

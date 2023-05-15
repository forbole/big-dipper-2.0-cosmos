import Box from '@/components/box';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/proposal_details/components/deposits/components/desktop';
import Mobile from '@/screens/proposal_details/components/deposits/components/mobile';
import Paginate from '@/screens/proposal_details/components/deposits/components/paginate';
import { useDeposits } from '@/screens/proposal_details/components/deposits/hooks';
import useStyles from '@/screens/proposal_details/components/deposits/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useMemo } from 'react';

const Deposits: FC<ComponentDefault> = (props) => {
  const { t } = useAppTranslation('proposals');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const { state } = useDeposits();
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const dataMemo = useShallowMemo(state.data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('deposits')}
      </Typography>
      <div className={classes.list}>
        <Desktop items={items} className={display.hiddenUntilLg} />
        <Mobile items={items} className={display.hiddenWhenLg} />
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

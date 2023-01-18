import Box from '@/components/box';
import { usePagination } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/proposal_details/components/deposits/components/desktop';
import Mobile from '@/screens/proposal_details/components/deposits/components/mobile';
import Paginate from '@/screens/proposal_details/components/deposits/components/paginate';
import { useDeposits } from '@/screens/proposal_details/components/deposits/hooks';
import useStyles from '@/screens/proposal_details/components/deposits/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC, useMemo } from 'react';

const Deposits: FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('proposals');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const { state } = useDeposits();
  const { classes, cx } = useStyles();
  const dataMemo = useShallowMemo(state.data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('deposits')}
      </Typography>
      <div className={classes.list}>
        <Desktop items={items} className={classes.hiddenUntilLg} />
        <Mobile items={items} className={classes.hiddenWhenLg} />
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

import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import { usePagination } from '@hooks';
import { useStyles } from './styles';
import { useVotes } from './hooks';
import { useProposalContext } from '../../contexts/proposal';
import {
  Tabs,
  Desktop,
  Mobile,
  Paginate,
} from './components';

const Votes: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { uiData } = useProposalContext();
  const { votes = [] } = uiData;

  const {
    state,
    handleTabChange,
  } = useVotes();

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const classes = useStyles();
  const items = sliceItems(votes);

  return (
    <Box className={classnames(className, classes.root)}>
      <Tabs tab={state.tab} handleTabChange={handleTabChange} />
      <div className={classes.list}>
        <Mobile className={classes.mobile} items={items} />
        <Desktop className={classes.desktop} items={items} />
      </div>
      <Paginate
        total={votes.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Votes;

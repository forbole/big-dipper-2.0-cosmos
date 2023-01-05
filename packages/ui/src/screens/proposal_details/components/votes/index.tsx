import Box from '@/components/box';
import NoData from '@/components/no_data';
import { usePagination, useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Paginate from '@/screens/proposal_details/components/votes/components/paginate';
import Tabs from '@/screens/proposal_details/components/votes/components/tabs';
import { useVotes } from '@/screens/proposal_details/components/votes/hooks';
import useStyles from '@/screens/proposal_details/components/votes/styles';
import { filterDataByTab } from '@/screens/proposal_details/components/votes/utils';
import dynamic from 'next/dynamic';
import React, { FC, ReactNode, useMemo } from 'react';

const Desktop = dynamic(
  () => import('@/screens/proposal_details/components/votes/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/proposal_details/components/votes/components/mobile')
);

const Votes: FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const {
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    sliceItems,
    resetPagination,
  } = usePagination({});
  const { classes, cx } = useStyles();
  const { state, handleTabChange } = useVotes(resetPagination);
  const filteredItemsMemo = useShallowMemo(
    filterDataByTab({
      tab: state.tab,
      data: state.data,
      notVoted: state.validatorsNotVoted,
    })
  );
  const items = useMemo(() => sliceItems(filteredItemsMemo), [filteredItemsMemo, sliceItems]);

  let list: ReactNode;

  if (!items.length) {
    list = <NoData />;
  } else if (isDesktop) {
    list = <Desktop className={classes.desktop} items={items} />;
  } else {
    <Mobile className={classes.mobile} items={items} />;
  }

  return (
    <Box className={cx(props.className, classes.root)}>
      <Tabs
        data={{
          yes: state.voteCount.yes,
          no: state.voteCount.no,
          abstain: state.voteCount.abstain,
          veto: state.voteCount.veto,
          notVoted: state.voteCount.didNotVote,
        }}
        tab={state.tab}
        handleTabChange={handleTabChange}
      />
      <div className={classes.list}>{list}</div>
      <Paginate
        total={filteredItemsMemo.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default Votes;

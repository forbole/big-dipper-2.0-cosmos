import Box from '@/components/box';
import NoData from '@/components/no_data';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/proposal_details/components/votes/components/desktop';
import Mobile from '@/screens/proposal_details/components/votes/components/mobile';
import Paginate from '@/screens/proposal_details/components/votes/components/paginate';
import Tabs from '@/screens/proposal_details/components/votes/components/tabs';
import { useVotes } from '@/screens/proposal_details/components/votes/hooks';
import useStyles from '@/screens/proposal_details/components/votes/styles';
import { filterDataByTab } from '@/screens/proposal_details/components/votes/utils';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC, ReactNode, useMemo } from 'react';

const Votes: FC<ComponentDefault> = (props) => {
  const {
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    sliceItems,
    resetPagination,
  } = usePagination({});
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
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
  } else {
    list = (
      <>
        <Desktop items={items} className={display.hiddenUntilLg} />
        <Mobile items={items} className={display.hiddenWhenLg} />
      </>
    );
  }

  return (
    <Box className={cx(classes.root, props.className)}>
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

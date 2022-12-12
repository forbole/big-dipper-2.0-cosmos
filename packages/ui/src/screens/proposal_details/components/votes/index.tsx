import Box from '@/components/box';
import NoData from '@/components/no_data';
import { usePagination, useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import Paginate from '@/screens/proposal_details/components/votes/components/paginate';
import Tabs from '@/screens/proposal_details/components/votes/components/tabs';
import { useVotes } from '@/screens/proposal_details/components/votes/hooks';
import { useStyles } from '@/screens/proposal_details/components/votes/styles';
import { filterDataByTab } from '@/screens/proposal_details/components/votes/utils';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

const Desktop = dynamic(
  () => import('@/screens/proposal_details/components/votes/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/proposal_details/components/votes/components/mobile')
);

const Votes: React.FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
    resetPagination,
  } = usePagination({});
  const classes = useStyles();
  const { state, handleTabChange } = useVotes(resetPagination);
  const filteredItems = filterDataByTab({
    tab: state.tab,
    data: state.data,
    notVoted: state.validatorsNotVoted,
  });

  const slicedItems = sliceItems(filteredItems);

  const userProfiles = useProfilesRecoil(slicedItems.map((x) => x.user));
  const items = slicedItems.map((x, i) => ({
    ...x,
    user: userProfiles[i],
    vote: '',
  }));

  let list: ReactNode;

  if (!items.length) {
    list = <NoData />;
  } else if (isDesktop) {
    list = <Desktop className={classes.desktop} items={items} />;
  } else {
    <Mobile className={classes.mobile} items={items} />;
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
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
        total={filteredItems.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Votes;

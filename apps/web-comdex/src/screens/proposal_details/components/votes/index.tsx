import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  Box, NoData,
} from '@components';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import {
  Tabs,
  Paginate,
} from './components';
import { filterDataByTab } from './utils';
import { useVotes } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

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
  const {
    state, handleTabChange,
  } = useVotes(resetPagination);
  const filteredItems = filterDataByTab({
    tab: state.tab,
    data: state.data,
    notVoted: state.validatorsNotVoted,
  });

  const slicedItems = sliceItems(filteredItems);

  const userProfiles = useProfilesRecoil(slicedItems.map((x) => x.user));
  const items = slicedItems.map((x, i) => {
    return ({
      ...x,
      user: userProfiles[i],
    });
  });

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
      <div className={classes.list}>
        {items.length ? (
          <>
            {isDesktop ? (
              <Desktop
                className={classes.desktop}
                items={items}
              />
            ) : (
              <Mobile
                className={classes.mobile}
                items={items}
              />
            )}
          </>
        ) : (
          <NoData />
        )}
      </div>
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

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

import { useStyles } from './styles';
import {
  Tabs,
  Paginate,
} from './components';
import { VoteType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Votes: React.FC<{
  className?: string;
  data: VoteType[];
  notVotedData: VoteType[];
  tab: number;
  yes: number;
  no: number;
  abstain: number;
  veto: number;
  total: number;
  notVoted: number;
  handleTabChange: (e, val) => void;
}> = ({
  className, ...props
}) => {
  const { isDesktop } = useScreenSize();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
    resetPagination,
  } = usePagination({
  });

  const classes = useStyles();
  const formatItems = () => {
    if (props.tab === 5) {
      return props.notVotedData;
    }
    return props.data.filter((x) => {
      if (props.tab === 1) {
        return x.vote === 'VOTE_OPTION_YES';
      }

      if (props.tab === 2) {
        return x.vote === 'VOTE_OPTION_NO';
      }

      if (props.tab === 3) {
        return x.vote === 'VOTE_OPTION_NO_WITH_VETO';
      }

      if (props.tab === 4) {
        return x.vote === 'VOTE_OPTION_ABSTAIN';
      }

      return true;
    });
  };

  const items = formatItems();
  const itemsPaginated = sliceItems(items);

  const tabChangeParentHelper = (_event: any, newValue: number) => {
    resetPagination();
    props.handleTabChange(_event, newValue);
  };

  return (
    <Box className={classnames(className, classes.root)}>
      <Tabs
        data={{
          yes: props.yes,
          no: props.no,
          abstain: props.abstain,
          veto: props.veto,
          notVoted: props.notVoted,
        }}
        tab={props.tab}
        handleTabChange={tabChangeParentHelper}
      />
      <div className={classes.list}>
        {items.length ? (
          <>
            {isDesktop ? (
              <Desktop
                className={classes.desktop}
                items={itemsPaginated}
              />
            ) : (
              <Mobile
                className={classes.mobile}
                items={itemsPaginated}
              />
            )}
          </>
        ) : (
          <NoData />
        )}
      </div>
      <Paginate
        total={items.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Votes;

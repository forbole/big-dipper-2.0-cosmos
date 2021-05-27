import React from 'react';
import classnames from 'classnames';
import {
  Box, NoData,
} from '@components';
import { usePagination } from '@hooks';
import { useStyles } from './styles';
import {
  Tabs,
  Desktop,
  Mobile,
  Paginate,
} from './components';
import { VoteType } from '../../types';

const Votes: React.FC<{
  className?: string;
  data: VoteType[];
  tab: number;
  yes: number;
  no: number;
  abstain: number;
  veto: number;
  total: number;
  handleTabChange: (e, val) => void;
}> = ({
  className, ...props
}) => {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({
  });

  const classes = useStyles();
  const formatItems = () => {
    return sliceItems(props.data.filter((x) => {
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
    }));
  };

  const items = formatItems();

  return (
    <Box className={classnames(className, classes.root)}>
      <Tabs
        data={{
          yes: props.yes,
          no: props.no,
          abstain: props.abstain,
          veto: props.veto,
        }}
        tab={props.tab}
        handleTabChange={props.handleTabChange}
      />
      <div className={classes.list}>
        {items.length ? (
          <>
            <Mobile className={classes.mobile} items={items} />
            <Desktop className={classes.desktop} items={items} />
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

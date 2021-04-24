import React from 'react';
import classnames from 'classnames';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { PROPOSAL_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@utils/merge_refs';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Loading,
  AvatarName,
  Box,
  Tag,
} from '@components';
import { useProposals } from './hooks';
import {
  Total,
  SingleProposal,
} from './components';
import { useStyles } from './styles';

const ProposalsList: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    items,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useProposals();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formatItems = items.map((x) => {
    return ({
      id: `#${x.id}`,
      proposer: (
        <AvatarName
          address={x.proposer.identity}
          imageUrl={x.proposer.image}
          name={x.proposer.moniker}
        />
      ),
      title: (
        <Link href={PROPOSAL_DETAILS(x.id)} passHref>
          <Typography variant="h3" className="value" component="a">
            {x.title}
          </Typography>
        </Link>
      ),
      submissionTime: dayjs(x.submissionTime).format('YYYY-MM-DD'),
      votingTimeStart: dayjs(x.votingTimeStart).format('YYYY-MM-DD'),
      content: x.content,
      status: (
        <Tag theme="one" value="status" />
      ),
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total="1,000" />
        {/* <Search className={classes.search} /> */}
      </div>
      <div className={classes.list}>
        <AutoSizer>
          {({
            height, width,
          }) => {
            return (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
              >
                {({
                  onItemsRendered, ref,
                }) => (
                  <List
                    className="List"
                    height={height}
                    itemCount={itemCount}
                    itemSize={getRowHeight}
                    onItemsRendered={onItemsRendered}
                    ref={mergeRefs(listRef, ref)}
                    width={width}
                  >
                    {({
                      index, style,
                    }) => {
                      const { rowRef } = useListRow(index, setRowHeight);
                      if (!isItemLoaded(index)) {
                        return (
                          <div style={style}>
                            <div ref={rowRef}>
                              <Loading />
                            </div>
                          </div>
                        );
                      }
                      const item = formatItems[index];
                      return (
                        <div style={style}>
                          <div ref={rowRef}>
                            <SingleProposal {...item} />
                            {index !== itemCount - 1 && <Divider />}
                          </div>
                        </div>
                      );
                    }}
                  </List>
                )}
              </InfiniteLoader>
            );
          }}
        </AutoSizer>

      </div>
    </Box>
  );
};

export default ProposalsList;

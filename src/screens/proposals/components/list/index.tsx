import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import Link from 'next/link';
import { mergeRefs } from '@utils/merge_refs';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { PROPOSAL_DETAILS } from '@utils/go_to_page';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Loading,
  Box,
} from '@components';
import {
  Total,
  SingleProposal,
} from './components';
import { useStyles } from './styles';
import { ProposalType } from '../../types';

const ProposalsList: React.FC<{
  className?: string;
  items: ProposalType[];
  rawDataTotal: number;
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
}> = ({
  className,
  items,
  rawDataTotal,
  isItemLoaded,
  itemCount,
  loadMoreItems,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x) => {
    return ({
      description: x.description.length > 200 ? `${x.description.slice(0, 200)}...` : x.description,
      status: x.status,
      title: (
        <Link href={PROPOSAL_DETAILS(x.id)} passHref>
          <Typography variant="h3" className="value" component="a">
            {x.title}
          </Typography>
        </Link>
      ),
      id: `#${numeral(x.id).format('0,0')}`,
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(rawDataTotal).format('0,0')} />
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
                      const item = formattedItems[index];
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

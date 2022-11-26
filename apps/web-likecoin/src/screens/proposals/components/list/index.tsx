import React, { ComponentProps, FC } from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import Link from 'next/link';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import { useList, useListRow } from '@/hooks';
import Loading from '@/components/loading';
import Box from '@/components/box';
import SingleProposal from '@/components/single_proposal';
import Total from '@/screens/proposals/components/list/components/total';
import { useStyles } from '@/screens/proposals/components/list/styles';
import type { ProposalType } from '@/screens/proposals/types';

const ProposalsList: FC<{
  className?: string;
  items: ProposalType[];
  rawDataTotal: number;
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
}> = ({ className, items, rawDataTotal, isItemLoaded, itemCount, loadMoreItems }) => {
  const classes = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();

  const formattedItems =
    items?.map((x) => ({
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
    })) ?? [];

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(rawDataTotal).format('0,0')} />
        {/* <Search className={classes.search} /> */}
      </div>
      <div className={classes.list}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded ?? (() => true)}
              itemCount={itemCount}
              loadMoreItems={
                loadMoreItems ??
                (() => {
                  // do nothing
                })
              }
            >
              {({ onItemsRendered, ref }) => (
                <List
                  className="List"
                  height={height}
                  itemCount={itemCount}
                  itemSize={getRowHeight}
                  onItemsRendered={onItemsRendered}
                  ref={mergeRefs(listRef, ref)}
                  width={width}
                >
                  {({ index, style }) => (
                    <ListItem
                      {...{ index, style, setRowHeight, isItemLoaded, formattedItems, itemCount }}
                    />
                  )}
                </List>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>
    </Box>
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    isItemLoaded: ((index: number) => boolean) | undefined;
    formattedItems: ComponentProps<typeof SingleProposal>[];
    itemCount: number;
  }
> = ({ index, style, setRowHeight, isItemLoaded, formattedItems, itemCount }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  if (!isItemLoaded?.(index)) {
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
};

export default ProposalsList;

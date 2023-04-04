import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import Box from '@/components/box';
import Loading from '@/components/loading';
import SingleProposal from '@/components/single_proposal';
import { useList, useListRow } from '@/hooks/use_react_window';
import Total from '@/screens/proposals/components/list/components/total';
import useStyles from '@/screens/proposals/components/list/styles';
import type { ProposalType } from '@/screens/proposals/types';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  isItemLoaded: ((index: number) => boolean) | undefined;
  item: ProposalType;
  isLast: boolean;
};

const ListItem: FC<ListItemProps> = ({
  index,
  style,
  setRowHeight,
  isItemLoaded,
  item,
  isLast,
}) => {
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

  const formattedItem = {
    description:
      item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description,
    status: item.status,
    title: (
      <Link shallow href={PROPOSAL_DETAILS(item.id)} className="value">
        {item.title}
      </Link>
    ),
    id: `#${numeral(item.id).format('0,0')}`,
  };

  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleProposal {...formattedItem} />
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

type ProposalsListProps = {
  className?: string;
  items: ProposalType[];
  rawDataTotal: number;
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
};

const ProposalsList: FC<ProposalsListProps> = ({
  className,
  items,
  rawDataTotal,
  isItemLoaded,
  itemCount,
  loadMoreItems,
}) => {
  const { classes, cx } = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <Box className={cx(classes.root, className)}>
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
                  height={height ?? 0}
                  itemCount={itemCount}
                  itemSize={getRowHeight}
                  onItemsRendered={onItemsRendered}
                  ref={mergeRefs(listRef, ref)}
                  width={width ?? 0}
                >
                  {({ index, style }) => (
                    <ListItem
                      key={items[index].id}
                      index={index}
                      style={style}
                      setRowHeight={setRowHeight}
                      isItemLoaded={isItemLoaded}
                      item={items[index]}
                      isLast={index === itemCount - 1}
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

export default ProposalsList;

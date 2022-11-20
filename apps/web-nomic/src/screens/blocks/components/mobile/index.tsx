import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Link from 'next/link';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import SingleBlockMobile from '@components/single_block_mobile';
import Loading from 'ui/components/loading';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { BLOCK_DETAILS } from 'ui/utils/go_to_page';
import { mergeRefs } from 'ui/utils/merge_refs';
import { useList, useListRow } from 'ui/hooks';
import { useStyles } from './styles';
import type { BlockType } from '../../types';

const Mobile: FC<{
  className?: string;
  items: BlockType[];
  itemCount: number;
  loadMoreItems: (...arg: unknown[]) => void;
  isItemLoaded?: (index: number) => boolean;
}> = ({ className, items, itemCount, loadMoreItems, isItemLoaded }) => {
  const classes = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();

  const formattedItems =
    items?.map((x) => ({
        height: (
          <Link href={BLOCK_DETAILS(x.height)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(x.height).format('0,0')}
            </Typography>
          </Link>
        ),
        txs: numeral(x.txs).format('0,0'),
        time: (dayjs as any).utc(x.timestamp).fromNow(),
        hash: getMiddleEllipsis(x.hash, {
          beginning: 16,
          ending: 12,
        }),
      })) ?? [];

  return (
    <div className={classnames(className, classes.root)}>
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
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: ReturnType<typeof useList>['setRowHeight'];
    isItemLoaded: ((index: number) => boolean) | undefined;
    formattedItems: ComponentProps<typeof SingleBlockMobile>[];
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
        <SingleBlockMobile {...item} />
        {index !== itemCount - 1 && <Divider />}
      </div>
    </div>
  );
};

export default Mobile;

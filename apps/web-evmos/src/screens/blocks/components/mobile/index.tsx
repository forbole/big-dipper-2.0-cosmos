import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AvatarName from 'ui/components/avatar_name';
import Loading from 'ui/components/loading';
import SingleBlockMobile from 'ui/components/single_block_mobile';
import { useList, useListRow } from 'ui/hooks';
import dayjs from 'ui/utils/dayjs';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from 'ui/utils/go_to_page';
import { mergeRefs } from 'ui/utils/merge_refs';
import type { ItemType } from '../../types';
import { useStyles } from './styles';

const Mobile: FC<{
  className?: string;
  items: ItemType[];
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
        proposer: (
          <AvatarName
            address={x.proposer.address}
            imageUrl={x.proposer.imageUrl}
            name={x.proposer.name}
          />
        ),
        hash: getMiddleEllipsis(x.hash, {
          beginning: 13,
          ending: 10,
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

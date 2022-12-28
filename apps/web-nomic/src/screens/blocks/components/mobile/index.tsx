import Loading from '@/components/loading';
import SingleBlockMobile from '@/components/single_block_mobile';
import { useList, useListRow } from '@/hooks';
import { useStyles } from '@/screens/blocks/components/mobile/styles';
import type { BlockType } from '@/screens/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

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
      time: dayjs.utc(x.timestamp).fromNow(),
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
                    key={items[index].height}
                    index={index}
                    style={style}
                    setRowHeight={setRowHeight}
                    isItemLoaded={isItemLoaded}
                    formattedItems={formattedItems}
                    itemCount={itemCount}
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
    setRowHeight: Parameters<typeof useListRow>[1];
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

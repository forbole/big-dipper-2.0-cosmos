import AvatarName from '@/components/avatar_name';
import Loading from '@/components/loading';
import SingleBlockMobile from '@/components/single_block_mobile';
import { useList, useListRow } from '@/hooks';
import { useStyles } from '@/screens/blocks/components/mobile/styles';
import type { ItemType } from '@/screens/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

type Props = {
  className?: string;
  items: ItemType[];
  itemCount: number;
  loadMoreItems: (...arg: unknown[]) => void;
  isItemLoaded?: (index: number) => boolean;
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    isItemLoaded: ((index: number) => boolean) | undefined;
    item: ItemType;
    itemCount: number;
  }
> = ({ index, style, setRowHeight, isItemLoaded, item, itemCount }) => {
  const { name, address, imageUrl } = item.proposer;
  const { rowRef } = useListRow(index, setRowHeight);

  const formattedItems = {
    height: (
      <Link href={BLOCK_DETAILS(item.height)} passHref>
        <Typography variant="body1" className="value" component="a">
          {numeral(item.height).format('0,0')}
        </Typography>
      </Link>
    ),
    txs: numeral(item.txs).format('0,0'),
    time: dayjs.utc(item.timestamp).fromNow(),
    proposer: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
    hash: getMiddleEllipsis(item.hash, {
      beginning: 13,
      ending: 10,
    }),
  };
  if (!isItemLoaded?.(index)) {
    return (
      <div style={style}>
        <div ref={rowRef}>
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleBlockMobile {...formattedItems} />
        {index !== itemCount - 1 && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<Props> = ({ className, items, itemCount, loadMoreItems, isItemLoaded }) => {
  const classes = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

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
                    item={items[index]}
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

export default Mobile;

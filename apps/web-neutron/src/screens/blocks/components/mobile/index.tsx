import AvatarName from '@/components/avatar_name';
import Loading from '@/components/loading';
import SingleBlockMobile from '@/components/single_block_mobile';
import Timestamp from '@/components/Timestamp';
import { useList, useListRow } from '@/hooks/use_react_window';
import useStyles from '@/screens/blocks/components/mobile/styles';
import type { ItemType } from '@/screens/blocks/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import useProviderCustomValidator from '@/hooks/useProviderCustomValidator';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  isItemLoaded: ((index: number) => boolean) | undefined;
  item: ItemType;
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
  const { profile } = useProviderCustomValidator(item.proposer);

  const formattedItem = {
    height: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(item.height)} className="value">
        {numeral(item.height).format('0,0')}
      </Link>
    ),
    txs: numeral(item.txs).format('0,0'),
    time: <Timestamp timestamp={item.timestamp} />,
    proposer: (
      <AvatarName
        address={profile?.address ?? ''}
        imageUrl={profile?.imageUrl ?? ''}
        name={profile?.name ?? ''}
      />
    ),
    hash: getMiddleEllipsis(item.hash, {
      beginning: 13,
      ending: 10,
    }),
  };

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
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleBlockMobile {...formattedItem} />
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

type MobileProps = {
  className?: string;
  items: ItemType[];
  itemCount: number;
  loadMoreItems: (...arg: unknown[]) => void;
  isItemLoaded?: (index: number) => boolean;
};

const Mobile: FC<MobileProps> = ({ className, items, itemCount, loadMoreItems, isItemLoaded }) => {
  const { classes, cx } = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <div className={cx(classes.root, className)}>
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
                    key={items[index].hash}
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
  );
};

export default Mobile;

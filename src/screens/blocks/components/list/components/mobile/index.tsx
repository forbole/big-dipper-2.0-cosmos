import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Divider, Typography,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { useBlocksContext } from '@src/screens/blocks/components/list/contexts/blocks';
import {
  SingleBlockMobile,
  AvatarName,
  Loading,
} from '@components';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    items,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useBlocksContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const classes = useStyles();

  const formatSlots = items.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      slot: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.slot}
          </Typography>
        </Link>
      ),
      hash: getMiddleEllipsis(x.hash, { beginning: 15 }),
      parentHash: getMiddleEllipsis(x.hash, { beginning: 15 }),
      txs: x.tx,
      time: dayjs(x.time).fromNow(),
      leader: <AvatarName
        address={x.leader.identity}
        imageUrl={x.leader.image}
        name={x.leader.moniker}
      />,
    });
  });

  return (
    <div className={classnames(className, classes.root)}>
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
                    const item = formatSlots[index];
                    return (
                      <div style={style}>
                        <div ref={rowRef}>
                          <SingleBlockMobile {...item} />
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
  );
};

export default Mobile;

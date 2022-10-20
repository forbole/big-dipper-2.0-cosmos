import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  AvatarName,
  SingleBlockMobile,
  Loading,
} from '@components';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
  itemCount: number;
  loadMoreItems: (any) => void;
  isItemLoaded?: (index: number) => boolean;
}> = ({
  className,
  items,
  itemCount,
  loadMoreItems,
  isItemLoaded,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x) => {
    return ({
      height: (
        <Link href={BLOCK_DETAILS(x.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(x.height).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(x.timestamp).fromNow(),
      proposer: (
        <AvatarName
          address={x.proposer.address}
          imageUrl={x.proposer.imageUrl}
          name={x.proposer.name}
        />
      ),
      hash: getMiddleEllipsis(x.hash, {
        beginning: 13, ending: 10,
      }),
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
                    const item = formattedItems[index];
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

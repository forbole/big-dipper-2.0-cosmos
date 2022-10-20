import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import {
  Loading, AvatarName,
} from '@components';
import { Divider } from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';
import { TokenType } from '../../../../types';
import { Token } from './components';

const Mobile: React.FC<{
  className?: string;
  items: TokenType[];
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

  const formattedItems = items.map((x, i) => {
    let price = '-';
    let marketCap = '-';
    let volume = '-';
    if (x.price !== null) {
      price = `$${numeral(x.price).format('0,0.[00]')}`;
    }
    if (x.marketCap !== null) {
      marketCap = `$${numeral(x.marketCap).format('0,0[00]')}`;
    }
    if (x.volume !== null) {
      volume = `$${numeral(x.volume).format('0,0[00]')}`;
    }

    return ({
      idx: `#${numeral(i + 1).format('0,0')}`,
      token: (
        <AvatarName
          name={x.token}
          address={x.address}
          imageUrl={x.logo}
          href={ACCOUNT_DETAILS}
        />
      ),
      price,
      marketCap,
      volume,
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
                          <Token {...item} />
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

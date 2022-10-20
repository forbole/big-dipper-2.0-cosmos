import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { VariableSizeGrid as Grid } from 'react-window';
import {
  Loading, SortArrows, AvatarName,
} from '@components';
import { useGrid } from '@hooks';
import { mergeRefs } from '@src/utils/merge_refs';
import { useStyles } from './styles';
import { columns } from './utils';
import { TokenType } from '../../../../types';

const Desktop: React.FC<{
  className?: string;
  items: TokenType[];
  itemCount: number;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  loadMoreItems: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  handleSort: (value: string) => void;
}> = ({
  className,
  items,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  handleSort,
  sortKey,
  sortDirection,
}) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

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
      <AutoSizer onResize={onResize}>
        {({
          height, width,
        }) => {
          return (
            <>
              {/* ======================================= */}
              {/* Table Header */}
              {/* ======================================= */}
              <Grid
                ref={columnRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={50}
                rowCount={1}
                rowHeight={() => 50}
                width={width}
              >
                {({
                  columnIndex, style,
                }) => {
                  const {
                    key,
                    align,
                    component,
                    sort,
                    sortKey: sortingKey,
                  } = columns[columnIndex];

                  return (
                    <div
                      style={style}
                      className={classnames(
                        classes.cell,
                        {
                          [classes.flexCells]: component || sort,
                          [align]: sort || component,
                          sort,
                        },
                      )}
                      onClick={() => (sort ? handleSort(sortingKey) : null)}
                      role="button"
                    >
                      {component || (
                      <Typography
                        variant="h4"
                        align={align}
                      >
                        {t(key)}
                        {!!sort && (
                        <SortArrows
                          sort={sortKey === sortingKey
                            ? sortDirection
                            : undefined}
                        />
                        )}
                      </Typography>
                      )}
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
              >
                {({
                  onItemsRendered, ref,
                }) => {
                  return (
                    <Grid
                      onItemsRendered={({
                        visibleRowStartIndex,
                        visibleRowStopIndex,
                        overscanRowStopIndex,
                        overscanRowStartIndex,
                      }) => {
                        onItemsRendered({
                          overscanStartIndex: overscanRowStartIndex,
                          overscanStopIndex: overscanRowStopIndex,
                          visibleStartIndex: visibleRowStartIndex,
                          visibleStopIndex: visibleRowStopIndex,
                        });
                      }}
                      ref={mergeRefs(gridRef, ref)}
                      columnCount={columns.length}
                      columnWidth={(index) => getColumnWidth(width, index)}
                      height={height - 50}
                      rowCount={itemCount}
                      rowHeight={getRowHeight}
                      width={width}
                      className="scrollbar"
                    >
                      {({
                        columnIndex, rowIndex, style,
                      }) => {
                        if (!isItemLoaded(rowIndex) && columnIndex === 0) {
                          return (
                            <div
                              style={{
                                ...style,
                                width,
                              }}
                            >
                              <Loading />
                            </div>
                          );
                        }

                        if (!isItemLoaded(rowIndex)) {
                          return null;
                        }

                        const {
                          key, align,
                        } = columns[columnIndex];
                        const item = formattedItems[rowIndex][key];
                        return (
                          <div
                            style={style}
                            className={classnames(classes.cell, classes.body, {
                              odd: !(rowIndex % 2),
                            })}
                          >
                            <Typography
                              variant="body1"
                              align={align}
                              component="div"
                            >
                              {item}
                            </Typography>
                          </div>
                        );
                      }}
                    </Grid>
                  );
                }}
              </InfiniteLoader>
            </>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Desktop;

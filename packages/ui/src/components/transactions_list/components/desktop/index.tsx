import React from 'react';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Link from 'next/link';
import { TRANSACTION_DETAILS, BLOCK_DETAILS } from 'ui/utils/go_to_page';
import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeGrid as Grid, VariableSizeGrid } from 'react-window';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { mergeRefs } from 'ui/utils/merge_refs';
import Loading from 'ui/components/loading';
import Result from 'ui/components/result';
import Tag from 'ui/components/tag';
import { useGrid } from 'ui/hooks';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import type { TransactionsListState } from '../../types';
import { columns } from './utils';
import { useStyles } from './styles';

const Desktop: React.FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const items = transactions.map((x) => ({
    block: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 4,
            ending: 4,
          })}
        </Typography>
      </Link>
    ),
    type: (
      <div>
        <Tag value={x.type?.[0]} theme="six" />
        {x.messages.count > 1 && ` + ${x.messages.count - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: (dayjs as any).utc(x.timestamp).fromNow(),
    messages: numeral(x.messages.count).format('0,0'),
  }));
  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer onResize={onResize}>
        {({ height, width }) => (
            <>
              {/* ======================================= */}
              {/* Table Header */}
              {/* ======================================= */}
              <Grid
                ref={columnRef as React.LegacyRef<Grid>}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={50}
                rowCount={1}
                rowHeight={() => 50}
                width={width}
              >
                {({ columnIndex, style }) => {
                  const { key, align } = columns[columnIndex];

                  return (
                    <div style={style} className={classes.cell}>
                      <Typography variant="h4" align={align}>
                        {t(key)}
                      </Typography>
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
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
                      {({ columnIndex, rowIndex, style }) => {
                        if (!isItemLoaded?.(rowIndex) && columnIndex === 0) {
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

                        if (!isItemLoaded?.(rowIndex)) {
                          return null;
                        }

                        const { key, align } = columns[columnIndex];
                        const item = items[rowIndex][key as keyof typeof items[number]];
                        return (
                          <div
                            style={style}
                            className={classnames(classes.cell, classes.body, {
                              odd: !(rowIndex % 2),
                            })}
                          >
                            <Typography variant="body1" align={align} component="div">
                              {item}
                            </Typography>
                          </div>
                        );
                      }}
                    </Grid>
                  )}
              </InfiniteLoader>
            </>
          )}
      </AutoSizer>
    </div>
  );
};

export default Desktop;

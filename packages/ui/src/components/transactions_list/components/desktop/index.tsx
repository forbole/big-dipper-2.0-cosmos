import Loading from '@/components/loading';
import Result from '@/components/result';
import Tag from '@/components/tag';
import Timestamp from '@/components/Timestamp';
import useStyles from '@/components/transactions_list/components/desktop/styles';
import { columns } from '@/components/transactions_list/components/desktop/utils';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useGrid } from '@/hooks/use_react_window';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC, MutableRefObject } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import FilterTxsByType from '@/components/transaction_type_filter';

const useRenderHeaderCell = ({
  columnIndex,
  style,
}: {
  columnIndex: number;
  style: React.CSSProperties;
}) => {
  const { key, align } = columns[columnIndex];
  const isTypeKey = key === 'type';
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();

  return (
    <div style={style} className={classes.cell}>
      <Typography variant="h4" align={align}>
        {t(key)}
      </Typography>
      {isTypeKey && <FilterTxsByType />}
    </div>
  );
};

const Desktop: FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const { gridRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);
  const { classes, cx } = useStyles();

  const items = transactions.map((x) => ({
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)}>
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)}>
        {getMiddleEllipsis(x.hash, {
          beginning: 4,
          ending: 4,
        })}
      </Link>
    ),
    type: (
      <div>
        <Tag value={x.type?.[0] ?? ''} theme="six" />
        {x.messages.count > 1 && ` + ${x.messages.count - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: <Timestamp timestamp={x.timestamp} />,
    messages: numeral(x.messages.count).format('0,0'),
  }));

  // Function to forward the ref
  const forwardRef = (node: Grid<any> | null) => {
    if (gridRef && typeof gridRef !== 'function') {
      // Update the type assertion to ensure compatibility
      (gridRef as MutableRefObject<Grid<any> | null>).current = node!;
    }
  };

  // Default isItemLoaded function
  const defaultIsItemLoaded = () => true;

  return (
    <div className={cx(classes.root, className)}>
      <AutoSizer onResize={onResize}>
        {({ height, width }) => (
          <>
            {/* ======================================= */}
            {/* Table Header */}
            {/* ======================================= */}
            <Grid
              ref={forwardRef}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={50}
              rowCount={1}
              rowHeight={() => 50}
              width={width ?? 0}
            >
              {useRenderHeaderCell}
            </Grid>
            {/* ======================================= */}
            {/* Table Body */}
            {/* ======================================= */}
            <InfiniteLoader
              isItemLoaded={isItemLoaded ?? defaultIsItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems ?? (() => Promise.resolve())}
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
                  ref={mergeRefs(gridRef, ref) as MutableRefObject<Grid<any> | null>}
                  columnCount={columns.length}
                  columnWidth={(index) => getColumnWidth(width ?? 0, index)}
                  height={(height ?? 0) - 50}
                  rowCount={itemCount}
                  rowHeight={getRowHeight}
                  width={width ?? 0}
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
                    const item = items[rowIndex][key as keyof (typeof items)[number]];
                    return (
                      <div
                        style={style}
                        className={cx(classes.cell, classes.body, {
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

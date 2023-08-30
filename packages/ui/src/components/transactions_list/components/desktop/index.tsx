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
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, LegacyRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

const Desktop: FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  hasNextPage,
  isNextPageLoading,
  isItemLoaded,
  transactions,
}) => {
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const { classes, cx } = useStyles();
  const { t } = useTranslation('transactions');

  const items = transactions.map((x) => ({
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)}>
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    hash: (
      <>
        <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)}>
          {getMiddleEllipsis(x.hash, {
            beginning: 4,
            ending: 4,
          })}
        </Link>
        <CopyIcon
          onClick={() => {
            copy(x.hash);
            toast<string>(t ? t('common:copied') : 'copied');
          }}
          className="copy-icon"
        />
      </>
    ),
    type: (
      <div>
        {x.type?.[0] && x.type?.[0] === 'Update Client' ? (
          <Tag value="IBC Received" theme="six" />
        ) : x.type?.[0] === 'Transfer' ? (
          <Tag value="IBC Transfer" theme="six" />
        ) : (
          <Tag value={x.type?.[0] ? x.type[0] : ''} theme="six" />
        )}
        {x.messages.count > 1 ? ` + ${x.messages.count - 1}` : ''}
      </div>
    ),
    result: <Result success={x.success} />,
    time: <Timestamp timestamp={x.timestamp} />,
    messages: numeral(x.messages.count).format('0,0'),
  }));

  if (itemCount < 10 && hasNextPage && !isNextPageLoading && loadMoreItems) {
    loadMoreItems();
  }

  return (
    <div className={cx(classes.root, className)}>
      <AutoSizer onResize={onResize}>
        {({ height, width }) => (
          <>
            {/* ======================================= */}
            {/* Table Header */}
            {/* ======================================= */}
            <Grid
              ref={columnRef as LegacyRef<Grid>}
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
                  <div style={style} className={classes.header}>
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
                  style={{ overflowX: 'hidden' }}
                >
                  {({ columnIndex, rowIndex, style }) => {
                    if (
                      !isItemLoaded?.(rowIndex) &&
                      columnIndex === 0
                      // rowIndex < transactions.length
                    ) {
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

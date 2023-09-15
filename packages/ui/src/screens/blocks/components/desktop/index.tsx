import AvatarName from '@/components/avatar_name';
import Loading from '@/components/loading';
import Timestamp from '@/components/Timestamp';
import { useGrid } from '@/hooks/use_react_window';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/blocks/components/desktop/styles';
import { columns } from '@/screens/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/blocks/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { ComponentProps, CSSProperties, FC, LegacyRef, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { resolveProfile } from '@/screens/blocks/utils';

type BlockItemProps = {
  item: ItemType;
  rowIndex: number;
  column: string;
  style: CSSProperties;
  align?: ComponentProps<typeof Typography>['align'];
};

const BlockItem: FC<BlockItemProps> = ({ item, rowIndex, column, style, align }) => {
  const profile = useProfileRecoil(item.proposer);
  const { address, imageUrl, name } = resolveProfile(item, profile);
  const { classes, cx } = useStyles();
  let formattedItem: ReactNode | null = null;
  switch (column) {
    case 'height':
      formattedItem = (
        <Link shallow prefetch={false} href={BLOCK_DETAILS(item.height)} className="value">
          {numeral(item.height).format('0,0')}
        </Link>
      );
      break;
    case 'txs':
      formattedItem = numeral(item.txs).format('0,0');
      break;
    case 'time':
      formattedItem = <Timestamp timestamp={item.timestamp} />;
      break;
    case 'proposer':
      formattedItem = <AvatarName address={address} imageUrl={imageUrl} name={name} />;
      break;
    case 'hash':
      formattedItem = getMiddleEllipsis(item.hash, {
        beginning: 13,
        ending: 15,
      });
      break;
    default:
      break;
  }
  return (
    <div
      style={style}
      className={cx(classes.cell, classes.body, {
        odd: !(rowIndex % 2),
      })}
    >
      <Typography variant="body1" align={align} component="div">
        {formattedItem}
      </Typography>
    </div>
  );
};

type DesktopProps = {
  className?: string;
  items: ItemType[];
  itemCount: number;
  loadMoreItems: (...arg: unknown[]) => void;
  isItemLoaded?: (index: number) => boolean;
};

const Desktop: FC<DesktopProps> = ({
  className,
  items,
  itemCount,
  loadMoreItems,
  isItemLoaded,
}) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

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
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={50}
              rowCount={1}
              rowHeight={() => 50}
              width={width ?? 0}
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
                    const item = items[rowIndex];
                    return (
                      <BlockItem
                        rowIndex={rowIndex}
                        column={key}
                        item={item}
                        style={style}
                        align={align}
                      />
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

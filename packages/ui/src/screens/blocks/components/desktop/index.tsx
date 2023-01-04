import AvatarName from '@/components/avatar_name';
import Loading from '@/components/loading';
import { useGrid } from '@/hooks';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/blocks/components/desktop/styles';
import { columns } from '@/screens/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import { PropTypes } from '@mui/material';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React, { CSSProperties, FC, LegacyRef, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

type BlockItemProps = {
  item: ItemType;
  rowIndex: number;
  column: string;
  style: CSSProperties;
  align: PropTypes.Alignment | undefined;
};

const BlockItem: FC<BlockItemProps> = ({ item, rowIndex, column, style, align }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);
  const classes = useStyles();
  let formattedItem: ReactNode | null = null;
  switch (column) {
    case 'height':
      formattedItem = (
        <Link href={BLOCK_DETAILS(item.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(item.height).format('0,0')}
          </Typography>
        </Link>
      );
      break;
    case 'txs':
      formattedItem = numeral(item.txs).format('0,0');
      break;
    case 'time':
      formattedItem = dayjs.utc(item.timestamp).fromNow();
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
      className={classnames(classes.cell, classes.body, {
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
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  return (
    <div className={classnames(className, classes.root)}>
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

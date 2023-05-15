import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { ComponentProps, CSSProperties, FC, LegacyRef, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import AvatarName from '@/components/avatar_name';
import SortArrows from '@/components/sort_arrows';
import { useGrid } from '@/hooks/use_react_window';
import useStyles from '@/screens/validators/components/list/components/validators/components/desktop/styles';
import { fetchColumns } from '@/screens/validators/components/list/components/validators/components/desktop/utils';
import VotingPower from '@/screens/validators/components/list/components/validators/components/voting_power';
import type { ValidatorType } from '@/screens/validators/components/list/types';
import { formatNumber } from '@/utils/format_token';
import { NODE_DETAILS, VALIDATOR_DETAILS } from '@/utils/go_to_page';

type GridColumnProps = {
  column: ReturnType<typeof fetchColumns>[number];
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  style: CSSProperties;
};

const GridColumn: FC<GridColumnProps> = ({ column, sortKey, sortDirection, handleSort, style }) => {
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();

  const { key, align, component, sort, sortKey: sortingKey } = column;
  const formattedComponent = component;

  return (
    <div
      style={style}
      className={cx(classes.cell, {
        [classes.flexCells]: !!component || sort,
        [align ?? '']: sort || !!component,
        sort,
      })}
      onClick={() => (sort ? handleSort(sortingKey ?? '') : null)}
      role="button"
      tabIndex={0}
      aria-label={t(key) ?? undefined}
    >
      {formattedComponent || (
        <Typography variant="h4" align={align}>
          {t(key)}
          {!!sort && <SortArrows sort={sortKey === sortingKey ? sortDirection : undefined} />}
        </Typography>
      )}
    </div>
  );
};

type GridRowProps = {
  column: string;
  style: CSSProperties;
  rowIndex: number;
  align?: ComponentProps<typeof Typography>['align'];
  item: ValidatorType;
  search: string;
  i: number;
};

const GridRow: FC<GridRowProps> = ({ column, style, rowIndex, align, item, search, i }) => {
  const { classes, cx } = useStyles();
  const { name, address, imageUrl } = item.validator;

  if (search) {
    const formattedSearch = search.toLowerCase().replace(/ /g, '');
    if (
      !name.toLowerCase().replace(/ /g, '').includes(formattedSearch) &&
      !address.toLowerCase().includes(formattedSearch)
    ) {
      return null;
    }
  }

  let formatItem: ReactNode = null;
  switch (column) {
    case 'idx':
      formatItem = `#${i + 1}`;
      break;
    case 'validator':
      formatItem = (
        <AvatarName
          address={address}
          imageUrl={imageUrl}
          name={name}
          href={item.isNode ? NODE_DETAILS : VALIDATOR_DETAILS}
        />
      );
      break;
    case 'locked':
      formatItem = (
        <VotingPower
          percentDisplay={`${item.stakePercent}%`}
          percentage={item.stakePercent}
          content={formatNumber(item.locked.value, 2)}
        />
      );
      break;
    case 'stake':
      formatItem = `${formatNumber(
        item.stake.value,
        item.stake.exponent
      )} ${item.stake.displayDenom.toUpperCase()}`;
      break;
    case 'nodes':
      formatItem = item.nodes ? numeral(item.nodes).format('0,0') : '-';
      break;
    case 'delegators':
      formatItem = item.delegators ? numeral(item.delegators).format('0,0') : '-';
      break;
    case 'commission':
      formatItem = item.commission ? `${numeral(item.commission * 100).format('0,0.[00]')}%` : '-';
      break;
    case 'apr':
      formatItem = item.apr ? `${item.apr}%` : '-';
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
        {formatItem}
      </Typography>
    </div>
  );
};

type DesktopProps = {
  className?: string;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  items: ValidatorType[];
  search: string;
};

const Desktop: FC<DesktopProps> = (props) => {
  const { classes, cx } = useStyles();
  const columns = fetchColumns();

  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  return (
    <div className={cx(classes.root, props.className)}>
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
              {({ columnIndex, style }) => (
                <GridColumn
                  column={columns[columnIndex]}
                  sortKey={props.sortKey}
                  sortDirection={props.sortDirection}
                  handleSort={props.handleSort}
                  style={style}
                />
              )}
            </Grid>
            {/* ======================================= */}
            {/* Table Body */}
            {/* ======================================= */}
            <Grid
              ref={gridRef as LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={(height ?? 0) - 50}
              rowCount={props.items.length}
              rowHeight={getRowHeight}
              width={width ?? 0}
              className="scrollbar"
            >
              {({ columnIndex, rowIndex, style }) => {
                const { key, align } = columns[columnIndex];
                const item = props.items[rowIndex];
                if (!item?.validator?.address) return null;
                return (
                  <GridRow
                    key={item.validator.address}
                    column={key}
                    style={style}
                    rowIndex={rowIndex}
                    align={align}
                    item={item}
                    search={props.search}
                    i={rowIndex}
                  />
                );
              }}
            </Grid>
          </>
        )}
      </AutoSizer>
    </div>
  );
};

export default Desktop;

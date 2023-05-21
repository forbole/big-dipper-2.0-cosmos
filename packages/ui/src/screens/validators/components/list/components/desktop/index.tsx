import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { ComponentProps, CSSProperties, FC, LegacyRef, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import chainConfig from '@/chainConfig';
import AvatarName from '@/components/avatar_name';
import InfoPopover from '@/components/info_popover';
import SortArrows from '@/components/sort_arrows';
import { useGrid } from '@/hooks/use_react_window';
import Condition from '@/screens/validators/components/list/components/condition';
import useStyles from '@/screens/validators/components/list/components/desktop/styles';
import { fetchColumns } from '@/screens/validators/components/list/components/desktop/utils';
import VotingPower from '@/screens/validators/components/list/components/voting_power';
import VotingPowerExplanation from '@/screens/validators/components/list/components/voting_power_explanation';
import type { ItemType } from '@/screens/validators/components/list/types';
import { getValidatorConditionClass } from '@/utils/get_validator_condition';
import { getValidatorStatus } from '@/utils/get_validator_status';

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
  let formattedComponent = component;

  if (key === 'votingPower') {
    formattedComponent = (
      <Typography variant="h4" className="label popover">
        {t('votingPower')}
        <InfoPopover content={<VotingPowerExplanation />} />
        {!!sort && <SortArrows sort={sortKey === sortingKey ? sortDirection : undefined} />}
      </Typography>
    );
  }

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
  item: ItemType;
  search: string;
  i: number;
  valLength: number;
};

const GridRow: FC<GridRowProps> = ({
  column,
  style,
  rowIndex,
  align,
  item,
  search,
  i,
  valLength,
}) => {
  const { classes, cx } = useStyles();
  const { name, address, imageUrl } = item.validator;
  const { t } = useAppTranslation('validators');
  const { chainName } = chainConfig();

  if (search) {
    const formattedSearch = search.toLowerCase().replace(/ /g, '');
    if (
      !name.toLowerCase().replace(/ /g, '').includes(formattedSearch) &&
      !address.toLowerCase().includes(formattedSearch)
    ) {
      return null;
    }
  }

  const status = getValidatorStatus(item.status, item.jailed, item.tombstoned);
  const condition = item.status === 3 ? getValidatorConditionClass(item.condition) : undefined;
  const percentDisplay =
    // eslint-disable-next-line no-nested-ternary
    item.status === 3
      ? chainName === 'wormhole'
        ? `${numeral(item.votingPower.toFixed(6)).format('0.[00]')}%`
        : `${numeral(item.votingPowerPercent.toFixed(6)).format('0.[00]')}%`
      : '0%';
  const votingPower = numeral(item.votingPower).format('0,0');

  let formatItem: ReactNode | null = null;
  switch (column) {
    case 'idx':
      formatItem = `#${i + 1}`;
      break;
    case 'validator':
      formatItem = <AvatarName address={address} imageUrl={imageUrl} name={name} />;
      break;
    case 'commission':
      formatItem = `${numeral(item.commission).format('0.[00]')}%`;
      break;
    case 'condition':
      formatItem = <Condition className={condition} />;
      break;
    case 'votingPower':
      formatItem = (
        <VotingPower
          percentDisplay={
            chainName === 'wormhole'
              ? `${numeral((item.votingPower / valLength) * 100).format('0.[00]')}%`
              : percentDisplay
          }
          percentage={
            chainName === 'wormhole'
              ? (item.votingPower / valLength) * 100
              : item.votingPowerPercent
          }
          content={votingPower}
          topVotingPower={item.topVotingPower ?? false}
        />
      );
      break;
    case 'status':
      formatItem = (
        <Typography variant="body1" className={cx('status', status.theme)}>
          {t(status.status)}
        </Typography>
      );
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
  items: ItemType[];
  search: string;
};

const Desktop: FC<DesktopProps> = (props) => {
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();
  const columns = fetchColumns(t);
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
                if (!item?.validator) return null;
                return (
                  <GridRow
                    key={item.validator.address}
                    column={key}
                    style={style}
                    rowIndex={rowIndex}
                    align={align}
                    item={item}
                    search={props.search}
                    valLength={props.items.length}
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

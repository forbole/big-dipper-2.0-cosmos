import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import Typography from '@material-ui/core/Typography';
import { useGrid } from 'ui/hooks';
import { formatNumber } from 'ui/utils/format_token';
import SortArrows from 'ui/components/sort_arrows';
import AvatarName from '@components/avatar_name';
import { VALIDATOR_DETAILS, NODE_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { fetchColumns } from './utils';
import VotingPower from '../voting_power';
import type { ValidatorType } from '../../../../types';

const Desktop: React.FC<{
  className?: string;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  items: ValidatorType[];
}> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchColumns();

  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const formattedItems = props.items.map((x, i) => ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
          href={x.isNode ? NODE_DETAILS : VALIDATOR_DETAILS}
        />
      ),
      locked: (
        <VotingPower
          percentDisplay={`${x.stakePercent}%`}
          percentage={x.stakePercent}
          content={formatNumber(x.locked.value, 2)}
        />
      ),
      stake: `${formatNumber(
        x.stake.value,
        x.stake.exponent
      )} ${x.stake.displayDenom.toUpperCase()}`,
      nodes: x.nodes ? numeral(x.nodes).format('0,0') : '-',
      delegators: x.delegators ? numeral(x.delegators).format('0,0') : '-',
      commission: x.commission ? `${numeral(x.commission * 100).format('0,0.[00]')}%` : '-',
      apr: x.apr ? `${x.apr}%` : '-',
    }));

  return (
    <div className={classnames(props.className, classes.root)}>
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
                  const { key, align, component, sort, sortKey: sortingKey } = columns[columnIndex];

                  const formattedComponent = component;

                  return (
                    <div
                      style={style}
                      className={classnames(classes.cell, {
                        [classes.flexCells]: component || sort,
                        [align ?? '']: sort || component,
                        sort,
                      })}
                      onClick={() => (sort ? props.handleSort(sortingKey ?? '') : null)}
                      role="button"
                      tabIndex={0}
                    >
                      {formattedComponent || (
                        <Typography variant="h4" align={align}>
                          {t(key)}
                          {!!sort && (
                            <SortArrows
                              sort={props.sortKey === sortingKey ? props.sortDirection : undefined}
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
              <Grid
                ref={gridRef as React.LegacyRef<Grid>}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={formattedItems.length}
                rowHeight={getRowHeight}
                width={width}
                className="scrollbar"
              >
                {({ columnIndex, rowIndex, style }) => {
                  const { key, align } = columns[columnIndex];
                  const item = (formattedItems as any)[rowIndex][key];
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
            </>
          )}
      </AutoSizer>
    </div>
  );
};

export default Desktop;

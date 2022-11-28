import React, { ReactNode } from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import Typography from '@material-ui/core/Typography';
import { useGrid } from '@/hooks';
import SortArrows from '@/components/sort_arrows';
import AvatarName from '@/components/avatar_name';
import InfoPopover from '@/components/info_popover';
import { getValidatorStatus } from '@/utils/get_validator_status';
import { useStyles } from '@/screens/validators/components/list/components/desktop/styles';
import { fetchColumns } from '@/screens/validators/components/list/components/desktop/utils';
import type { ItemType } from '@/screens/validators/components/list/types';
import VotingPower from '@/screens/validators/components/list/components/voting_power';
import VotingPowerExplanation from '@/screens/validators/components/list/components/voting_power_explanation';

const Desktop: React.FC<{
  className?: string;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  items: ItemType[];
}> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchColumns();

  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const formattedItems = props.items.map((x, i): { [key: string]: ReactNode } => {
    const status = getValidatorStatus(x.inActiveSet, x.jailed, x.tombstoned);
    const percentDisplay = x.inActiveSet
      ? `${numeral(x.votingPowerPercent).format('0.[00]')}%`
      : '0%';
    const votingPower = numeral(x.votingPower).format('0,0');

    return {
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      commission: `${numeral(x.commission).format('0.[00]')}%`,
      votingPower: (
        <VotingPower
          percentDisplay={percentDisplay}
          percentage={x.votingPowerPercent}
          content={votingPower}
          topVotingPower={x.topVotingPower ?? false}
        />
      ),
      status: (
        <Typography variant="body1" className={classnames('status', status.theme)}>
          {status.status}
        </Typography>
      ),
    };
  });

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

                let formattedComponent = component;

                if (key === 'votingPower') {
                  formattedComponent = (
                    <Typography variant="h4" className="label popover">
                      {t('votingPower')}
                      <InfoPopover content={VotingPowerExplanation} />
                      {!!sort && (
                        <SortArrows
                          sort={props.sortKey === sortingKey ? props.sortDirection : undefined}
                        />
                      )}
                    </Typography>
                  );
                }

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
                    aria-label={t(key)}
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
                const item = formattedItems[rowIndex][key];
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

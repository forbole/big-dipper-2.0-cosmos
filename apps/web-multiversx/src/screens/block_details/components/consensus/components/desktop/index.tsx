import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, LegacyRef, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import { useGrid } from '@/hooks/use_react_window';
import useShallowMemo from '@/hooks/useShallowMemo';
import useStyles from '@/screens/block_details/components/consensus/components/desktop/styles';
import {
  columns,
  formatRows,
} from '@/screens/block_details/components/consensus/components/desktop/utils';
import type { ConsensusType } from '@/screens/block_details/types';

const Desktop: FC<{ items: ConsensusType[]; className?: string }> = (props) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);
  const itemsMemo = useShallowMemo(props.items);
  const rows = useMemo(() => formatRows(itemsMemo), [itemsMemo]);

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
            <Grid
              ref={gridRef as LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={(height ?? 0) - 50}
              rowCount={rows.length}
              rowHeight={getRowHeight}
              width={width ?? 0}
            >
              {({ columnIndex, rowIndex, style }) => {
                const { key, align } = columns[columnIndex];
                const selectedItem = rows[rowIndex][key as keyof (typeof rows)[number]];
                return (
                  <div
                    style={style}
                    className={cx(classes.cell, classes.body, {
                      odd: !(rowIndex % 2),
                    })}
                  >
                    <Typography variant="body1" align={align} component="div">
                      {selectedItem}
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

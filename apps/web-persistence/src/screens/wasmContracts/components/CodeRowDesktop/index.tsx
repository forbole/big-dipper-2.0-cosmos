import { RowProps } from '@/components/InfiniteList/types';
import { WasmCodeQuery } from '@/graphql/types/general_types';
import { useWasmCodesByOffset } from '@/screens/wasmContracts/hooks';
import useStyles from '@/screens/wasmContracts/styles';
import { WasmCodeQueryVariable, WasmCodeType } from '@/screens/wasmContracts/types';
import { columnsCode } from '@/screens/wasmContracts/utils';
import Skeleton from '@mui/material/Skeleton';
import Grid2 from '@mui/material/Unstable_Grid2';

const CodeRowDesktop = ({
  index,
  style,
  variables,
  items: preloadedItems,
  itemsPerPage,
  rowHeight,
  cursor,
}: RowProps<WasmCodeQuery, WasmCodeQueryVariable, WasmCodeType>) => {
  const offset = index - (index % itemsPerPage);
  const { items } = useWasmCodesByOffset(cursor, variables, offset);
  const { classes, cx } = useStyles();

  const item = items?.[index - offset] ?? (offset === 0 ? preloadedItems[index] : undefined);
  const height = rowHeight(index);
  return (
    <div className={cx(classes.row, { [classes.odd]: index % 2 === 0 })} style={style}>
      <Grid2 container columnGap={1}>
        {columnsCode.map((col) => (
          <Grid2
            key={col.columnKey}
            xs={col.width}
            justifyContent={col.justifyContent}
            textAlign={col.textAlign}
            height={height ?? 0}
          >
            <div className={classes.cell}>
              {!item ? <Skeleton className={classes.skeleton} /> : item?.[col.columnKey]}
            </div>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default CodeRowDesktop;

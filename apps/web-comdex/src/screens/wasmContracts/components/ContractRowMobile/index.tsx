import { RowProps } from '@/components/InfiniteList/types';
import { WasmCodeQuery } from '@/graphql/types/general_types';
import { useWasmContractsByOffset } from '@/screens/wasmContracts/hooks';
import useStyles from '@/screens/wasmContracts/styles';
import { WasmCodeQueryVariable, WasmContractType } from '@/screens/wasmContracts/types';
import { columnsContract } from '@/screens/wasmContracts/utils';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import useAppTranslation from '@/hooks/useAppTranslation';

const ContractRowMobile = ({
  index,
  style,
  variables,
  items: preloadedItems,
  itemsPerPage,
  rowHeight,
  cursor,
}: RowProps<WasmCodeQuery, WasmCodeQueryVariable, WasmContractType>) => {
  const offset = index - (index % itemsPerPage);
  const { items } = useWasmContractsByOffset(cursor, variables, offset);
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('wasm_contracts');

  const item = items?.[index - offset] ?? (offset === 0 ? preloadedItems[index] : undefined);

  return (
    <div className={cx(classes.row, { [classes.odd]: index % 2 === 0 })} style={style}>
      <Grid2 container style={{ height: rowHeight(index) }}>
        {columnsContract.map((col) => (
          <Grid2
            key={col.columnKey}
            xs={col.widthMobile}
            justifyContent={col.justifyContent}
            textAlign={col.textAlign}
            order={col.orderMobile}
          >
            <Typography className={classes.label} variant="h4">
              {t(col.columnKey)}
            </Typography>
            {!item ? (
              <Skeleton className={classes.skeleton} />
            ) : (
              <Box className={classes.value}>
                {(item as unknown as WasmContractType)?.[col.columnKey]}
              </Box>
            )}
            <Divider />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ContractRowMobile;

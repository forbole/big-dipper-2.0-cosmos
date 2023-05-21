import useStyles from '@/screens/wasmContracts/styles';
import { columnsContract } from '@/screens/wasmContracts/utils';
import Grid2 from '@mui/material/Unstable_Grid2';
import useAppTranslation from '@/hooks/useAppTranslation';

const ContractHeaderDesktop = () => {
  const { t } = useAppTranslation('wasm_contracts');
  const { classes } = useStyles();
  return (
    <Grid2 container className={classes.header} columnGap={1}>
      {columnsContract.map((col) => (
        <Grid2
          key={col.columnKey}
          xs={col.width}
          justifyContent={col.justifyContent}
          textAlign={col.textAlign}
        >
          {t(col.columnKey)}
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ContractHeaderDesktop;

import AccessControl from '@/screens/wasmContracts/components/AccessControl';
import AllowGovernanceControl from '@/screens/wasmContracts/components/AllowGovernanceControl';
// import WasmContractStatus from '@/screens/contracts/components/WasmContractStatus';
import useStyles from '@/screens/wasmContracts/styles';
import { ShowMoreProps } from '@/screens/wasmContracts/types';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FC } from 'react';

// const ShowMore: FC<ShowMoreProps> = ({ accessControls, allowGovernanceControl, statusId }) => {
const ShowMore: FC<ShowMoreProps> = ({ accessControls, allowGovernanceControl }) => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.showMoreContainer}>
      <Grid2 container>
        <Grid2 xs={12}>
          <AllowGovernanceControl allowGovernanceControl={allowGovernanceControl} />
        </Grid2>
        <Grid2 xs={12}>{/* <WasmContractStatus statusId={statusId} /> */}</Grid2>
        {!!accessControls?.length && (
          <Grid2 xs={12}>
            <AccessControl accessControls={accessControls} />
          </Grid2>
        )}
      </Grid2>
    </Paper>
  );
};

export default ShowMore;

import AccessControl from '@/screens/contracts/components/AccessControl';
import AllowGovernanceControl from '@/screens/contracts/components/AllowGovernanceControl';
import MarkerAccountStatus from '@/screens/contracts/components/MarkerAccountStatus';
import useStyles from '@/screens/contracts/styles';
import { ShowMoreProps } from '@/screens/contracts/types';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FC } from 'react';

const ShowMore: FC<ShowMoreProps> = ({ accessControls, allowGovernanceControl, statusId }) => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.showMoreContainer}>
      <Grid2 container>
        <Grid2 xs={12}>
          <AllowGovernanceControl allowGovernanceControl={allowGovernanceControl} />
        </Grid2>
        <Grid2 xs={12}>
          <MarkerAccountStatus statusId={statusId} />
        </Grid2>
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

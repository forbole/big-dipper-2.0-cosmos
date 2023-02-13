import AvatarName from '@/components/avatar_name';
import CodeId from '@/screens/wasmContracts/components/CodeId';
import CodeInstantiatePermission from '@/screens/wasmContracts/components/CodeInstantiatePermission';
import useStyles from '@/screens/wasmContracts/styles';
import { ShowMoreProps } from '@/screens/wasmContracts/types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import numeral from 'numeral';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ShowMore: FC<ShowMoreProps> = ({ wasmCode, codeId }) => {
  const { classes } = useStyles();
  const { t } = useTranslation('wasm_contracts');
  const height = wasmCode?.height;
  const instantiatePermission = wasmCode?.instantiate_permission;
  const sender = wasmCode?.sender;
  return (
    <Paper className={classes.showMoreContainer}>
      {!codeId && <Typography variant="subtitle1">No WASM code</Typography>}
      {!!codeId && (
        <Grid2 container>
          <Grid2 xs={3} display="flex" alignItems="center">
            WASM Code ID:
          </Grid2>
          <Grid2 xs={9} display="flex" alignItems="center">
            <CodeId codeId={codeId} />
          </Grid2>
          {!!height && (
            <>
              <Grid2 xs={3} display="flex" alignItems="center">
                {t('height')}:
              </Grid2>
              <Grid2 xs={9} display="flex" alignItems="center">
                {numeral(height).format('0,0')}
              </Grid2>
            </>
          )}
          {!!instantiatePermission && (
            <>
              <Grid2 xs={3} display="flex" alignItems="center">
                {t('instantiatePermission')}:
              </Grid2>
              <Grid2 xs={9} display="flex" alignItems="center">
                <CodeInstantiatePermission instantiatePermission={instantiatePermission} />
              </Grid2>
            </>
          )}
          {!!sender && (
            <>
              <Grid2 xs={3} display="flex" alignItems="center">
                {t('sender')}:
              </Grid2>
              <Grid2 xs={9} display="flex" alignItems="center">
                <AvatarName address={sender} name={sender} />
              </Grid2>
            </>
          )}
        </Grid2>
      )}
    </Paper>
  );
};

export default ShowMore;

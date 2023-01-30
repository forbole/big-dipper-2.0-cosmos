import useStyles from '@/screens/wasmContracts/styles';
import { statusList } from '@/screens/wasmContracts/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

const WasmContractStatus: FC<{ statusId: string }> = ({ statusId }) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography className={classes.label} variant="h4">
        Status
      </Typography>
      <Box className={classes.value}>
        {statusList[statusId as keyof typeof statusList] ?? statusList['0']}
      </Box>
    </Box>
  );
};

export default WasmContractStatus;

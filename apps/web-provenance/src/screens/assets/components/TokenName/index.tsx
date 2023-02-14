import Avatar from '@/components/avatar';
import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/screens/assets/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FC } from 'react';

interface TokenNameProps {
  address: string;
  denom: string;
  tokenName: string | undefined;
}

const TokenName: FC<TokenNameProps> = ({ address, denom, tokenName }) => {
  const { classes } = useStyles();
  return (
    <Box>
      {!!tokenName && (
        <Grid2 container className={classes.nativeTokenName}>
          <Grid2>
            <ChainIcon type="icon" alt={tokenName} />
          </Grid2>
          <Grid2>
            <Typography variant="body1" aria-label={address} title={address}>
              {denom}
            </Typography>
            <Typography variant="subtitle1">{tokenName}</Typography>
          </Grid2>
        </Grid2>
      )}
      {!tokenName && (
        <div className={classes.tokenName}>
          <Avatar address={address} />
          <span>{denom}</span>
        </div>
      )}
    </Box>
  );
};

export default TokenName;

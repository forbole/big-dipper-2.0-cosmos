import AvatarName from '@/components/avatar_name';
import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/screens/wasmContracts/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
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
            <Link shallow href={ADDRESS_DETAILS(address)}>
              <Typography variant="body1">{denom}</Typography>
            </Link>
            <Typography variant="subtitle1">{tokenName}</Typography>
          </Grid2>
        </Grid2>
      )}
      {!tokenName && <AvatarName address={address} name={denom} title={denom} />}
    </Box>
  );
};

export default TokenName;

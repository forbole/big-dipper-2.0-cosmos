import useStyles from '@/screens/wasmContracts/styles';
import { ContractNameProps, zContractName } from '@/screens/wasmContracts/types';
import { WASM_CONTRACTS_DETAILS } from '@/utils/go_to_page';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

const ContractName: FC<ContractNameProps> = ({ name, codeId }) => {
  const { classes } = useStyles();
  const contractName = zContractName.parse(name);
  const title = `${contractName}\nCode ID: ${codeId}`;
  if (!codeId) {
    return (
      <Tooltip title={title} className={classes.contractName} placement="bottom-start" arrow>
        <Typography variant="subtitle1">{contractName || '<blank>'}</Typography>
      </Tooltip>
    );
  }
  return (
    <Tooltip title={title} className={classes.contractName} placement="bottom-start" arrow>
      <Link href={WASM_CONTRACTS_DETAILS(String(codeId))}>
        <Typography variant="subtitle1">{contractName || '<blank>'}</Typography>
      </Link>
    </Tooltip>
  );
};

export default ContractName;

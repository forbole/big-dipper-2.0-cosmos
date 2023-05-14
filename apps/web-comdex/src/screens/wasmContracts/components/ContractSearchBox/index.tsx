import useStyles from '@/screens/wasmContracts/styles';
import { ContractSearchBoxProps } from '@/screens/wasmContracts/types';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import useTranslationByApp from '@/hooks/useTranslationByApp';
import { FC } from 'react';

const ContractSearchBox: FC<ContractSearchBoxProps> = ({ searchText, handleChange }) => {
  const { t } = useTranslationByApp('wasm_contracts');
  const { classes } = useStyles();
  return (
    <TextField
      className={classes.textfield}
      value={searchText}
      onChange={handleChange}
      type="search"
      placeholder={t('Search by contract name') ?? undefined}
      InputProps={{ startAdornment: <SearchIcon /> }}
    />
  );
};

export default ContractSearchBox;

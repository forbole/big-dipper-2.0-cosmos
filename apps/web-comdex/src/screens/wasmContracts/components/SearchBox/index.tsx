import useStyles from '@/screens/wasmContracts/styles';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

export interface SearchBoxProps {
  searchText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ searchText, handleChange }) => {
  const { t } = useTranslation('contracts');
  const { classes } = useStyles();
  return (
    <TextField
      className={classes.textfield}
      value={searchText}
      onChange={handleChange}
      type="search"
      placeholder={t('Search by contract name')}
      InputProps={{ startAdornment: <SearchIcon /> }}
    />
  );
};

export default SearchBox;

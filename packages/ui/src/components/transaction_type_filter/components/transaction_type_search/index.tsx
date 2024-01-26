import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import useStyles from '@/components/search/styles';
import { useTxTypeSearch } from '@/components/transaction_type_filter/components/transaction_type_search/hooks';

type TxTypeSearchProps = {
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
};

const TxTypeSearch: FC<TxTypeSearchProps> = ({ className, placeholder, callback }) => {
  const { classes, cx } = useStyles();
  const { handleOnSubmit, handleOnChange, handleKeyDown, value } = useTxTypeSearch(callback);
  return (
    <form className={cx(classes.root, className)} onSubmit={handleOnSubmit}>
      <InputBase
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        inputProps={{
          'aria-label': placeholder,
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </form>
  );
};

export default TxTypeSearch;

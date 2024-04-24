import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import { FC } from 'react';
import { useTxTypeSearch } from '@/components/transaction_type_filter/components/transaction_type_search/hooks';
import useStyles from '@/components/transaction_type_filter/components/transaction_type_search/styles';
import IconSearch from 'shared-utils/assets/icon-search.svg';

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
            <IconSearch className={classes.iconSearch} />
          </InputAdornment>
        }
      />
    </form>
  );
};

export default TxTypeSearch;

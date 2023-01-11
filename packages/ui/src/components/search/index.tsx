import { useSearch } from '@/components/search/hooks';
import useStyles from '@/components/search/styles';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React, { FC } from 'react';

type SearchProps = {
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
};

const Search: FC<SearchProps> = ({ className, placeholder, callback }) => {
  const { classes, cx } = useStyles();

  const { handleOnSubmit, handleOnChange, handleKeyDown, value } = useSearch(callback);
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

export default Search;

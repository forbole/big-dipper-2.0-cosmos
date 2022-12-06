import { useSearch } from '@/components/search/hooks';
import { useStyles } from '@/components/search/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import classnames from 'classnames';
import React from 'react';

const Search: React.FC<{
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
}> = ({ className, placeholder, callback }) => {
  const classes = useStyles();

  const { handleOnSubmit, handleOnChange, handleKeyDown, value } = useSearch(callback);
  return (
    <form className={classnames(className, classes.root)} onSubmit={handleOnSubmit}>
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

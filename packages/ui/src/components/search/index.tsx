import React from 'react';
import classnames from 'classnames';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';
import { useSearch } from './hooks';

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

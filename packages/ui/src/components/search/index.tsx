// import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import useStyles from '@/components/search/styles';
import { useSearch } from '@/components/search/hooks';

type SearchProps = {
  className?: string;
  placeholder: string;
  submitOnChange?: boolean;
  callback: (value: string) => void;
};

const Search: FC<SearchProps> = ({ className, placeholder, callback, submitOnChange = false }) => {
  const { classes, cx } = useStyles();

  const { handleOnSubmit, handleOnChange, handleSubmitOnChange, handleKeyDown, value } =
    useSearch(callback);

  return (
    <form className={cx(classes.root, className)} onSubmit={handleOnSubmit}>
      <InputBase
        placeholder={placeholder}
        onChange={submitOnChange ? handleSubmitOnChange : handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        inputProps={{
          'aria-label': placeholder,
        }}
        endAdornment={
          // <InputAdornment position="start">
          <SearchIcon fontSize="small" className="Search-icon" onClick={handleOnSubmit} />
          // </InputAdornment>
        }
      />
    </form>
  );
};

export default Search;

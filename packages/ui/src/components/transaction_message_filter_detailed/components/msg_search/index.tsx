import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import useStyles from '@/components/search/styles';
import { useMsgSearch } from '@/components/transaction_message_filter_detailed/components/msg_search/hooks';

type MsgSearchProps = {
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
};

const MsgSearch: FC<MsgSearchProps> = ({ className, placeholder, callback }) => {
  const { classes, cx } = useStyles();
  const { handleOnSubmit, handleOnChange, handleKeyDown, value } = useMsgSearch(callback);
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

export default MsgSearch;

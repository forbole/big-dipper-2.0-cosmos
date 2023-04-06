import { useTranslation, TFunction } from 'next-i18next';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import useStyles from '@/components/nav/components/network_search_bar/styles';
import { useSearch, useSearchBar } from '@/components/nav/components/network_search_bar/hooks';
import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';

type SearchProps = {
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
  trans: TFunction;
};

const Search: FC<SearchProps> = ({ className, placeholder, callback, trans }) => {
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
      <Button type="submit" className={classes.button}>
        {trans('search')}
      </Button>
    </form>
  );
};

const NetworkSarchBar: FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation('common');
  const { networks } = useBigDipperNetworks();
  const { handleOnSubmit } = useSearchBar(t, networks);

  return (
    <Search
      className={className}
      placeholder={t('networkSearchBarPlaceholder')}
      callback={handleOnSubmit}
      trans={t}
    />
  );
};

export default NetworkSarchBar;

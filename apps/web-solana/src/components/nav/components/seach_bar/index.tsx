import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Search } from '@components';
import { useSearchBar } from './hooks';

const SearchBar: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation('common');

  const {
    handleOnSubmit,
  } = useSearchBar();

  return (
    <Search
      className={className}
      placeholder={t('searchBarPlaceholder')}
      callback={handleOnSubmit}
    />
  );
};

export default SearchBar;

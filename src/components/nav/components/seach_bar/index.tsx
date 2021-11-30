import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Search } from '@components';
import { useSearchBar } from './hooks';

const SearchBar: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation('common');
  const placeholderText;
  const {
    handleOnSubmit,
  } = useSearchBar(t);

  if (){
    placeholderText = t('searchBarPlaceholder');
  }else{
    placeholderText = t('searchBarPlaceholder');
  }
  

  return (
    <Search
      className={className}
      placeholder={t('searchBarPlaceholder')}
      callback={handleOnSubmit}
    />
  );
};

export default SearchBar;

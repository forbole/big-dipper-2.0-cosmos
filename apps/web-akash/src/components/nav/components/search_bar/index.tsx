import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Search from '@components/search';
import chainConfig from 'ui/dist/chainConfig';
import { useSearchBar } from './hooks';

const SearchBar: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation('common');
  const {
    handleOnSubmit,
  } = useSearchBar(t);

  let placeholderText;
  if (chainConfig.extra.profile) {
    placeholderText = t('searchBarPlaceholderDtag');
  } else {
    placeholderText = t('searchBarPlaceholder');
  }

  return (
    <Search
      className={className}
      placeholder={placeholderText}
      callback={handleOnSubmit}
    />
  );
};

export default SearchBar;

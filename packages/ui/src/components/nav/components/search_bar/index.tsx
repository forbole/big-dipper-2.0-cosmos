import chainConfig from '@/chainConfig';
import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import Search from '@/components/search';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const { extra } = chainConfig();

const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation('common');
  const { handleOnSubmit } = useSearchBar(t);

  let placeholderText;
  if (extra.profile) {
    placeholderText = t('searchBarPlaceholderDtag');
  } else {
    placeholderText = t('searchBarPlaceholder');
  }

  return <Search className={className} placeholder={placeholderText} callback={handleOnSubmit} />;
};

export default SearchBar;

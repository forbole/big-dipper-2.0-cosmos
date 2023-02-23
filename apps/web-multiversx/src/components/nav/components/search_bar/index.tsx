import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import Search from '@/components/search';

const SearchBar: FC<ComponentDefault> = ({ className }) => {
  const { t } = useTranslation('common');
  const { handleOnSubmit } = useSearchBar();

  const placeholderText = t('searchBarPlaceholder');

  return <Search className={className} placeholder={placeholderText} callback={handleOnSubmit} />;
};

export default SearchBar;

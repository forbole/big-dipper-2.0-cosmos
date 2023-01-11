import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import Search from '@/components/search';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SearchBar: FC<ComponentDefault> = ({ className }) => {
  const { t } = useTranslation('common');
  const { handleOnSubmit } = useSearchBar();

  const placeholderText = t('searchBarPlaceholder');

  return <Search className={className} placeholder={placeholderText} callback={handleOnSubmit} />;
};

export default SearchBar;

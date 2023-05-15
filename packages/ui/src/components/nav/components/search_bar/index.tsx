import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import chainConfig from '@/chainConfig';
import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import Search from '@/components/search';

const { extra } = chainConfig();

const SearchBar: FC<{ className?: string }> = ({ className }) => {
  const { t } = useAppTranslation('common');
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

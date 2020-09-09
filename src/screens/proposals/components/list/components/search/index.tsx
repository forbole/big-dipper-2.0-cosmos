import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useTokensContext } from '@src/screens/proposals/components/list/contexts/tokens';
import { Search as SearchComponent } from '@components';

const Search: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const { searchCallback } = useTokensContext();

  return (
    <SearchComponent
      className={classnames(className)}
      placeholder={t('searchToken')}
      callback={searchCallback}
    />
  );
};

export default Search;

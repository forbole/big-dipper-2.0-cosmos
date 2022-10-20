import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { useScreenSize } from '@hooks';
import {
  Box,
  NoData,
  Search,
} from '@components';
import {
  Total,
  Mobile,
  Desktop,
} from './components';

import { useStyles } from './styles';
import { TokenType } from '../../types';

const TokensList: React.FC<{
  className?: string;
  items: TokenType[];
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
  handleSearch: (value: string) => void;
  handleSort: (value:string) => void;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
}> = ({
  className,
  items,
  isItemLoaded,
  itemCount,
  loadMoreItems,
  handleSearch,
  sortDirection,
  sortKey,
  handleSort,
}) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(items.length).format('0,0')} />
        <Search
          className={classes.search}
          callback={handleSearch}
          placeholder={t('searchTokens')}
        />
      </div>
      <div className={classes.list}>
        {!items.length ? (
          <NoData />
        ) : (
          <>
            {isDesktop ? (
              <Desktop
                items={items}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
                handleSort={handleSort}
                sortDirection={sortDirection}
                sortKey={sortKey}
              />
            ) : (
              <Mobile
                items={items}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            )}
          </>
        )}
      </div>
    </Box>
  );
};

export default TokensList;

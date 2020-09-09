import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import { a11yProps } from '@utils/allyProps';
import { Search } from '@components';
import { tabLabels } from './utils';
import { useStyles } from './styles';
import { useValidatorsContext } from '../../contexts/validators';

const TabsHeader: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const {
    tab,
    handleTabChange,
    handleSearch,
  } = useValidatorsContext();

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs value={tab} onChange={handleTabChange}>
        {tabLabels.map((x, i) => (
          <Tab
            key={x}
            label={t(x)}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
      <Search
        className={classes.searchBar}
        callback={handleSearch}
        placeholder={t('searchValidator')}
      />
    </div>
  );
};

export default TabsHeader;

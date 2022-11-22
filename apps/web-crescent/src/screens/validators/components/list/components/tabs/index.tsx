import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { a11yProps } from 'ui/utils/a11yProps';
import Search from 'ui/components/search';
import { tabLabels } from './utils';
import { useStyles } from './styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (event: any, newvalue: number) => void;
  handleSearch: (value: string) => void;
}> = ({ className, tab, handleTabChange, handleSearch }) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs variant="scrollable" scrollButtons="off" value={tab} onChange={handleTabChange}>
        {tabLabels.map((x, i) => (
          <Tab key={x} label={t(x)} {...a11yProps(i)} />
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

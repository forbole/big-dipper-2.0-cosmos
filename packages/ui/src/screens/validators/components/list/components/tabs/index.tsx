import Search from '@/components/search';
import { useStyles } from '@/screens/validators/components/list/components/tabs/styles';
import { tabLabels } from '@/screens/validators/components/list/components/tabs/utils';
import { a11yProps } from '@/utils/a11yProps';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { ComponentProps } from 'react';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
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

import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps } from '@/utils/a11yProps';
import Search from '@/components/search';
import { useStyles } from '@/screens/validators/components/list/components/tabs/styles';
import type { TabType } from '@/screens/validators/components/list/types';

type TabsHeaderProps = {
  className?: string;
  tabs: TabType[];
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
  handleSearch: (value: string) => void;
};

const TabsHeader: FC<TabsHeaderProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');

  return (
    <div className={classnames(props.className, classes.root)}>
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        value={props.tab}
        onChange={props.handleTabChange}
      >
        {props.tabs.map((x, i) => (
          <Tab key={x.id} label={t(x.key)} {...a11yProps(i)} />
        ))}
      </Tabs>
      <Search
        className={classes.searchBar}
        callback={props.handleSearch}
        placeholder={t('searchValidator')}
      />
    </div>
  );
};

export default TabsHeader;

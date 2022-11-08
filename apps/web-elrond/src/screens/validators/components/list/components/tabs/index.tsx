import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Tabs, Tab } from '@material-ui/core';
import { a11yProps } from 'ui/utils/a11yProps';
import Search from '@components/search';
import { useStyles } from './styles';
import { TabType } from '../../types';

const TabsHeader: React.FC<{
  className?: string;
  tabs: TabType[];
  tab: number;
  handleTabChange: (event: any, newvalue: number) => void;
  handleSearch: (value: string) => void;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');

  return (
    <div className={classnames(props.className, classes.root)}>
      <Tabs
        variant="scrollable"
        scrollButtons="off"
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

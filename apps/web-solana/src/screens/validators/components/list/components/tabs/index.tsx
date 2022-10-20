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

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (event:any, newvalue:number) => void;
  handleSearch: (value: string) => void;
  validatorCount: string[];
}> = ({
  className,
  tab,
  handleTabChange,
  handleSearch,
  validatorCount,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs
        variant="scrollable"
        scrollButtons="off"
        value={tab}
        onChange={handleTabChange}
      >
        {tabLabels.map((x, i) => (
          <Tab
            key={x}
            label={`${t(x)} (${validatorCount[i]})`}
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

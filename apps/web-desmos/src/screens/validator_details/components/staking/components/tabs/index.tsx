import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { a11yProps } from 'ui/utils/a11yProps';
import { useStyles } from './styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (_event: any, newValue: number) => void;
  tabs: {
    id: number;
    key: string;
    count: number;
    component?: React.ReactNode;
  }[];
}> = ({ className, tab, handleTabChange, tabs }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs variant="scrollable" scrollButtons="off" value={tab} onChange={handleTabChange}>
        {tabs.map((x) => (
          <Tab
            key={x.key}
            label={t(x.key, {
              num: numeral(x.count ?? 0).format('0,0'),
            })}
            {...a11yProps(x.id)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;
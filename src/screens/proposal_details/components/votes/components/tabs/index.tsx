import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import { a11yProps } from '@utils/allyProps';
import { tabLabels } from './utils';
import { useStyles } from './styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (_event: any, newValue: number) => void;
  data: {
    yes: number;
    no: number;
    abstain: number;
    veto: number;
    notVoted: number;
  }
}> = ({
  className, tab, handleTabChange, data,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('proposals');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs
        variant="scrollable"
        scrollButtons="off"
        value={tab}
        onChange={handleTabChange}
      >
        {tabLabels(data).map((x, i) => (
          <Tab
            key={x.key}
            label={`${t(x.key)} (${x.num})`}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

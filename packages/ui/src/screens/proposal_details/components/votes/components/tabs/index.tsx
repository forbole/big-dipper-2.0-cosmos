import React, { ComponentProps } from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { a11yProps } from '@/utils/a11yProps';
import { tabLabels } from '@/screens/proposal_details/components/votes/components/tabs/utils';
import { useStyles } from '@/screens/proposal_details/components/votes/components/tabs/styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
  data: {
    yes: number;
    no: number;
    abstain: number;
    veto: number;
    notVoted: number;
  };
}> = ({ className, tab, handleTabChange, data }) => {
  const classes = useStyles();
  const { t } = useTranslation('proposals');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs variant="scrollable" scrollButtons="off" value={tab} onChange={handleTabChange}>
        {tabLabels(data).map((x, i) => (
          <Tab key={x.key} label={`${t(x.key)} (${x.num})`} {...a11yProps(i)} />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

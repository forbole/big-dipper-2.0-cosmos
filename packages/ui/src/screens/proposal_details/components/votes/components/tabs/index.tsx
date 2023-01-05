import useStyles from '@/screens/proposal_details/components/votes/components/tabs/styles';
import { tabLabels } from '@/screens/proposal_details/components/votes/components/tabs/utils';
import { a11yProps } from '@/utils/a11yProps';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useTranslation from 'next-translate/useTranslation';
import React, { ComponentProps, FC } from 'react';

type TabsHeaderProps = {
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
};

const TabsHeader: FC<TabsHeaderProps> = ({ className, tab, handleTabChange, data }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('proposals');

  return (
    <div className={cx(className, classes.root)}>
      <Tabs variant="scrollable" scrollButtons={false} value={tab} onChange={handleTabChange}>
        {tabLabels(data).map((x, i) => (
          <Tab key={x.key} label={`${t(x.key)} (${x.num})`} {...a11yProps(i)} />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

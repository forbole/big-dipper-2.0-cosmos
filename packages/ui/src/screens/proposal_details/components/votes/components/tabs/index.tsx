import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useAppTranslation from '@/hooks/useAppTranslation';
import { ComponentProps, FC } from 'react';
import { a11yProps } from '@/utils/a11yProps';
import { tabLabels } from '@/screens/proposal_details/components/votes/components/tabs/utils';
import useStyles from '@/screens/proposal_details/components/votes/components/tabs/styles';

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
  const { t } = useAppTranslation('proposals');

  return (
    <div className={cx(classes.root, className)}>
      <Tabs variant="scrollable" scrollButtons={false} value={tab} onChange={handleTabChange}>
        {tabLabels(data).map((x, i) => (
          <Tab key={x.key} label={`${t(x.key)} (${x.num})`} {...a11yProps(i)} />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

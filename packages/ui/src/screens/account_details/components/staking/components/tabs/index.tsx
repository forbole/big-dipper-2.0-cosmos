import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useAppTranslation from '@/hooks/useAppTranslation';
import { ComponentProps, FC, ReactNode } from 'react';
import { a11yProps } from '@/utils/a11yProps';
import useStyles from '@/screens/account_details/components/staking/components/tabs/styles';

interface TabsHeaderProps {
  className?: string;
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
  tabs: {
    id: number;
    key: string;
    count: string;
    component?: ReactNode;
  }[];
}

const TabsHeader: FC<TabsHeaderProps> = ({ className, tab, handleTabChange, tabs }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('accounts');

  return (
    <div className={cx(classes.root, className)}>
      <Tabs variant="scrollable" scrollButtons={false} value={tab} onChange={handleTabChange}>
        {tabs.map((x) => (
          <Tab
            key={x.key}
            label={t(x.key, {
              num: x.count,
            })}
            {...a11yProps(x.id)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

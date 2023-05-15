import { ComponentProps, FC } from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps } from '@/utils/a11yProps';
import Search from '@/components/search';
import useStyles from '@/screens/validators/components/list/components/tabs/styles';
import type { TabType } from '@/screens/validators/components/list/types';

type TabsHeaderProps = {
  className?: string;
  tabs: TabType[];
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
  handleSearch: (value: string) => void;
};

const TabsHeader: FC<TabsHeaderProps> = (props) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('validators');

  return (
    <div className={cx(classes.root, props.className)}>
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
        placeholder={t('searchValidator') ?? undefined}
      />
    </div>
  );
};

export default TabsHeader;

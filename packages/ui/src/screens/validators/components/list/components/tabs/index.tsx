import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useAppTranslation from '@/hooks/useAppTranslation';
import { ComponentProps, FC } from 'react';
import Search from '@/components/search';
import useStyles from '@/screens/validators/components/list/components/tabs/styles';
import { tabLabels } from '@/screens/validators/components/list/components/tabs/utils';
import { a11yProps } from '@/utils/a11yProps';

type TabsHeaderProps = {
  className?: string;
  tab: number;
  handleTabChange: ComponentProps<typeof Tabs>['onChange'];
  handleSearch: (value: string) => void;
};

const TabsHeader: FC<TabsHeaderProps> = ({ className, tab, handleTabChange, handleSearch }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('validators');

  return (
    <div className={cx(classes.root, className)}>
      <Tabs variant="scrollable" scrollButtons={false} value={tab} onChange={handleTabChange}>
        {tabLabels.map((x, i) => (
          <Tab key={x} label={t(x)} {...a11yProps(i)} />
        ))}
      </Tabs>
      <Search
        className={classes.searchBar}
        callback={handleSearch}
        placeholder={t('searchValidator') ?? undefined}
      />
    </div>
  );
};

export default TabsHeader;

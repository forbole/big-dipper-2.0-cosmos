import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import { a11yProps } from '@utils/allyProps';
import { getTabs } from '../../utils';
import { useStyles } from './styles';
import { useAccountContext } from '../../../../contexts/account';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (_event: any, newValue: number) => void;
}> = ({
  className, tab, handleTabChange,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const tabs = getTabs();
  const { uiData } = useAccountContext();

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs value={tab} onChange={handleTabChange}>
        {tabs.map((x) => (
          <Tab
            key={x.key}
            label={t(x.key, {
              num: uiData.staking[x.key]?.length ?? 0,
            })}
            {...a11yProps(x.id)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

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
import {
  RedelegationType, UnbondingType, DelegationType,
} from '../../../../types';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (_event: any, newValue: number) => void;
  staking: {
    delegations: DelegationType[];
    redelegations: RedelegationType[];
    unbondings: UnbondingType[];
  }
}> = ({
  className,
  tab,
  handleTabChange,
  staking,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const tabs = getTabs();

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs value={tab} onChange={handleTabChange}>
        {tabs.map((x) => (
          <Tab
            key={x.key}
            label={t(x.key, {
              num: staking[x.key]?.length ?? 0,
            })}
            {...a11yProps(x.id)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

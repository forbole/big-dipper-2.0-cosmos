import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import { a11yProps } from '@utils/allyProps';
import { tabLabels } from '../../utils';
import { useStyles } from './styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (_event: any, newValue: number) => void;
}> = ({
  className, tab, handleTabChange,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs value={tab} onChange={handleTabChange}>
        {tabLabels.map((x) => (
          <Tab
            key={x.key}
            label={t(x.key, {
              num: x.num,
            })}
            {...a11yProps(x.id)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;

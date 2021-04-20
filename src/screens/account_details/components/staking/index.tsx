import React from 'react';
import classnames from 'classnames';
import {
  Box, TabPanel,
} from '@components';
import { Tabs } from './components';
import { useStaking } from './hooks';
import { getTabs } from './utils';
import { useStyles } from './styles';

const Staking: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    state,
    handleTabChange,
  } = useStaking();

  const tabs = getTabs();

  return (
    <Box className={classnames(className, classes.root)}>
      <Tabs tab={state.tab} handleTabChange={handleTabChange} />
      {tabs.map((x) => {
        const Component = x.component;
        return (
          <TabPanel
            key={x.id}
            index={x.id}
            value={state.tab}
          >
            <Component />
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Staking;

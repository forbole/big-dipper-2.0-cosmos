import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
import NetworkList from '@/components/nav/components/desktop/components/action_bar/components/network_list';
import SettingsList from '@/components/nav/components/desktop/components/action_bar/components/settings_list';
import useStyles from '@/components/nav/components/desktop/components/action_bar/styles';
import SearchBar from '@/components/nav/components/search_bar';
import { useGetComponentDimension } from '@/hooks';
import React, { FC } from 'react';

type ActionBarProps = {
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
};

const ActionBar: FC<ActionBarProps> = ({ toggleNetwork, className, isNetwork }) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const { classes, cx } = useStyles();
  return (
    <div className={cx(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={cx(classes.searchBar, { open: isNetwork })} />
        <Network
          className={cx(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <SettingsList />
      </div>
      <NetworkList
        actionHeight={height}
        className={cx(classes.networkList, {
          open: isNetwork,
        })}
      />
    </div>
  );
};

export default ActionBar;

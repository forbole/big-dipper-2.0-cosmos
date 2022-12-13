import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
import NetworkList from '@/components/nav/components/desktop/components/action_bar/components/network_list';
import SettingsList from '@/components/nav/components/desktop/components/action_bar/components/settings_list';
import ConnectWallet from '@/components/nav/components/connect_wallet';
import { useStyles } from '@/components/nav/components/desktop/components/action_bar/styles';
import SearchBar from '@/components/nav/components/search_bar';
import { useGetComponentDimension } from '@/hooks';
import classnames from 'classnames';
import React from 'react';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({ toggleNetwork, className, isNetwork }) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={classnames(classes.searchBar, { open: isNetwork })} />
        <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <SettingsList />
        <ConnectWallet />
      </div>
      <NetworkList
        actionHeight={height}
        className={classnames(classes.networkList, {
          open: isNetwork,
        })}
      />
    </div>
  );
};

export default ActionBar;

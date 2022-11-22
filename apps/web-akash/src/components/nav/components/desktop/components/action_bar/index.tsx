import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from 'ui/hooks';
import { useStyles } from './styles';
import Network from './components/network';
import NetworkList from './components/network_list';
import SettingsList from './components/settings_list';
import SearchBar from '../../../search_bar';

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

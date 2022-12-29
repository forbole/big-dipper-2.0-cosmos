import ConnectWallet from '@/components/nav/components/connect_wallet';
import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
import NetworkList from '@/components/nav/components/desktop/components/action_bar/components/network_list';
import SettingsList from '@/components/nav/components/desktop/components/action_bar/components/settings_list';
import { useStyles } from '@/components/nav/components/desktop/components/action_bar/styles';
import SearchBar from '@/components/nav/components/search_bar';
import WalletDetails from '@/components/nav/components/wallet_details';
import { useGetComponentDimension } from '@/hooks';
import classnames from 'classnames';
import { FC } from 'react';

type ActionBarProps = {
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
};

const ActionBar: FC<ActionBarProps> = ({ toggleNetwork, className, isNetwork }) => {
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
        <WalletDetails />
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

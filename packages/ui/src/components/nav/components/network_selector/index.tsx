import useStyles from '@/components/nav/components/network_selector/styles';
import IconConnected from '@/assets/icon_connected.svg';
import Arrow from '@/assets/icon_network_expand.svg';
import { FC, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type NetSelectorProps = {
  className?: string;
  isNavOpen?: boolean;
};

const NetworkSelector: FC<NetSelectorProps> = ({ isNavOpen }) => {
  const { classes, cx } = useStyles();
  const netNameLowercase = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  let netName: string = '';
  let selectedNetwork: any = {};
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const networks = [
    {
      name: 'Mainnet',
      link: 'explorer.coreum.com',
    },
    {
      name: 'Devnet',
      link: 'explorer.devnet-1.coreum.dev',
    },
    {
      name: 'Testnet',
      link: 'explorer.testnet-1.coreum.dev',
    },
  ];

  if (netNameLowercase) {
    netName = netNameLowercase.charAt(0).toUpperCase() + netNameLowercase.slice(1);
  }

  networks.forEach((network) => {
    if (network.name === netName) {
      selectedNetwork = network;
    }
  });

  return (
    <ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
      <div
        className={cx(classes.root, isNavOpen ? 'active' : '')}
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <IconConnected className="netIcon" />
        <div className={cx('netContent', isNavOpen ? 'active' : '')}>
          <div className="currentNetName">{selectedNetwork.name}</div>
          <div className="currentNetLink">{selectedNetwork.link}</div>
        </div>
        <Arrow className={cx('arrowIcon', isModalOpen ? 'modalShow' : '')} />
        <div className={cx('modal', isModalOpen ? 'modalShow' : '', isNavOpen ? 'active' : '')}>
          {networks.map((network, idx) => {
            let isSelected = false;
            if (selectedNetwork.name === network.name) isSelected = true;
            return (
              <a
                href={isSelected ? '#' : `https://${network.link}`}
                className={cx(
                  'linkItem',
                  selectedNetwork.name === network.name ? 'selectedItem' : ''
                )}
                key={`${network.name} ${idx}`}
              >
                <div className="netName">{network.name}</div>
                <div className="netLink">{network.link}</div>
              </a>
            );
          })}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default NetworkSelector;

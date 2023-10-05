import useStyles from '@/components/network_selector/styles';
import IconConnected from '@/assets/icon_connected.svg';
import Arrow from '@/assets/icon_network_expand.svg';
import { FC, useEffect, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type NetSelectorProps = {
  className?: string;
};

type NetType = {
  name: string;
  version?: number;
  link: string;
};

const isClient = typeof window === 'object';

const NetworkSelector: FC<NetSelectorProps> = () => {
  const { classes, cx } = useStyles();
  const netNameLowercase = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  let netName = '';
  let selectedNetwork: NetType = { name: '', link: '' };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { width } = getSize();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (width) {
      setWindowWidth(width);
    }
  }, [width]);

  const networks = [
    {
      name: 'Mainnet',
      link: 'explorer.coreum.com',
    },
    {
      name: 'Testnet',
      version: 1,
      link: 'explorer.testnet-1.coreum.dev',
    },
    {
      name: 'Devnet',
      version: 1,
      link: 'explorer.devnet-1.coreum.dev',
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

  if (windowWidth < 1025) {
    return (
      <ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
        <div
          className={cx(classes.root, isModalOpen ? 'open-menu-margin' : '')}
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          <IconConnected className="netIcon" />
          <div className={cx('netContent')}>
            <div className="currentNetName">{`${selectedNetwork.name}${
              selectedNetwork.version ?? ''
            }`}</div>
            <div className="currentNetLink">{selectedNetwork.link}</div>
          </div>
          <Arrow className={cx('arrowIcon', isModalOpen ? 'modalShow' : '')} />
          {isModalOpen ? (
            <div className={cx('modal', 'modalShow')}>
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
                    <div className="netName">{`${network.name} ${
                      network.version ? network.version : ''
                    }`}</div>
                    <div className="netLink">{network.link}</div>
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    );
  }

  return (
    <ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
      <div className={cx(classes.root)} onClick={() => setIsModalOpen((prev) => !prev)}>
        <IconConnected className="netIcon" />
        <div className={cx('netContent')}>
          <div className="currentNetName">{`${selectedNetwork.name} ${
            selectedNetwork.version ? selectedNetwork.version : ''
          }`}</div>
        </div>
        <Arrow className={cx('arrowIcon', isModalOpen ? 'modalShow' : '')} />
        <div className={cx('modal', isModalOpen ? 'modalShow' : '')}>
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
                <div className="netName">{`${network.name} ${
                  network.version ? network.version : ''
                }`}</div>
                <div className="netLink">{network.link}</div>
              </a>
            );
          })}
        </div>
      </div>
    </ClickAwayListener>
  );
};

function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  };
}

export default NetworkSelector;

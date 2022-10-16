import React from 'react';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { readNetworks } from '@recoil/big_dipper_networks';
import { useStyles } from './styles';
import { SingleNetwork } from './components';

const Networks:React.FC<{
  className?: string;
}> = ({ className }) => {
  const networks = useRecoilValue(readNetworks);
  const classes = useStyles();

  return (
    <div className={className}>
      {networks.map((x) => (
        <div className={classes.networkList} key={x.name}>
          <img src={x.logo} alt="logo" />
          <div className="network">
            <Typography variant="h4">
              {x.name}
            </Typography>
            {x.mainnet.map((network) => (
              <SingleNetwork
                className="mainnet"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.testnet.map((network) => (
              <SingleNetwork
                className="testnet"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.retired.map((network) => (
              <SingleNetwork
                className="retired"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.other.map((network) => (
              <SingleNetwork
                className="other"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Networks;

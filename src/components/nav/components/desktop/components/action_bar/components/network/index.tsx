import React from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { useNetworksContext } from '@src/contexts';
import { chainConfig } from '@src/chain_config';
import { useStyles } from './styles';

const Network:React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className, toggleNetwork,
}) => {
  const classes = useStyles();
  const {
    selected,
  } = useNetworksContext();
  return (
    <div
      className={classnames(className, classes.root)}
      onClick={toggleNetwork}
      role="button"
    >
      <img src={chainConfig.icon} className={classes.icon} alt="icon" />
      <Typography variant="body1">
        {selected}
      </Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;

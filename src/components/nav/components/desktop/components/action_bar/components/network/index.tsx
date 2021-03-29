import React from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { chainConfig } from '@src/chain_config';
import { useStyles } from './styles';

const Network:React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className, toggleNetwork,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classnames(className, classes.root)}
      onClick={toggleNetwork}
      role="button"
    >
      <img src={chainConfig.icon} className={classes.icon} alt="icon" />
      {/* <chainConfig.icon className={classes.icon} /> */}
      <Typography variant="body1">
        {chainConfig.network}
      </Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;

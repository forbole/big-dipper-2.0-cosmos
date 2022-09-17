import Icon from '@assets/icon';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { readSelectedNetwork } from '@recoil/big_dipper_networks';
import classnames from 'classnames';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useStyles } from './styles';

const Network:React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className, toggleNetwork,
}) => {
  const classes = useStyles();
  const selected = useRecoilValue(readSelectedNetwork);

  return (
    <div
      className={classnames(className, classes.root)}
      onClick={toggleNetwork}
      role="button"
    >

      <Icon className={classes.icon} />
      <Typography variant="body1">
        {selected}
      </Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;

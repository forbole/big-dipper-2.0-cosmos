import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network/styles';
import { readSelectedNetwork } from '@/recoil/big_dipper_networks';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type NetworkProps = {
  className?: string;
  toggleNetwork: () => void;
};

const Network: FC<NetworkProps> = ({ className, toggleNetwork }) => {
  const { classes, cx } = useStyles();
  const selected = useRecoilValue(readSelectedNetwork);

  return (
    <div
      className={cx(classes.root, className)}
      onClick={toggleNetwork}
      role="button"
      tabIndex={0}
      aria-label={selected}
    >
      <ChainIcon type="icon" className={classes.icon} alt="icon" />
      <Typography variant="body1">{selected}</Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;

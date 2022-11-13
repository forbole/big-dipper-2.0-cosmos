import React from 'react';
import classnames from 'classnames';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import { readSelectedNetwork } from '@recoil/big_dipper_networks';
import ChainIcon from 'ui/components/ChainIcon';
import { useStyles } from './styles';

const Network: React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({ className, toggleNetwork }) => {
  const classes = useStyles();
  const selected = useRecoilValue(readSelectedNetwork);

  return (
    <div className={classnames(className, classes.root)} onClick={toggleNetwork} role="button">
      <ChainIcon type="icon" className={classes.icon} alt="icon" />
      <Typography variant="body1">{selected}</Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;

import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network/styles';
import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

type NetworkProps = {
  className?: string;
  toggleNetwork: () => void;
};

const Network: FC<NetworkProps> = ({ className, toggleNetwork }) => {
  const { classes, cx } = useStyles();
  const { selectedName } = useBigDipperNetworks();

  return (
    <div
      className={cx(classes.root, className)}
      onClick={toggleNetwork}
      role="button"
      tabIndex={0}
      aria-label={selectedName}
    >
      <ChainIcon type="icon" className={classes.icon} alt="icon" />
      <Typography variant="body1">{selectedName}</Typography>
      <ExpandMoreIcon />
    </div>
  );
};

export default Network;

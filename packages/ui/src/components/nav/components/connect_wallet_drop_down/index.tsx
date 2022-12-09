import Box from '@/components/box';
import { useStyles } from '@/components/nav/components/connect_wallet_drop_down/styles';
import classnames from 'classnames';
import React from 'react';

const ConnectWalletDropDown: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={classnames(className, classes.root)}>
      <div
        style={{
          height: 600,
        }}
      >
        {/* TO DO  */}
      </div>
    </Box>
  );
};

export default ConnectWalletDropDown;

import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import { Networks } from '@src/components/nav/components';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  className?: string;
  actionHeight?: number;
}> = ({
  className, actionHeight,
}) => {
  const classes = useStyles();

  return (
    <Box
      boxShadow={3}
      className={classnames(className, classes.root)}
    >
      <div
        style={{
          height: actionHeight,
        }}
      >
        <BigDipperLogoWhite />
      </div>
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;

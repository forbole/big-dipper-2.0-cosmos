import React from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import { LinearProgress } from '@material-ui/core';
import ChainIcon from 'ui/dist/components/ChainIcon';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <ChainIcon type="logo" className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        {theme === 'light' ? (
          <BigDipperLogoRed />
        ) : (
          <BigDipperLogoWhite />
        )}
      </div>
    </div>
  );
};

export default InitialLoad;

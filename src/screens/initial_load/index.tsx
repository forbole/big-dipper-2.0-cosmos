import React from 'react';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import BigDipperLogoRed from '@assets/big-dipper-red.svg';
import { useSettingsContext } from '@contexts';
import { LinearProgress } from '@material-ui/core';
import { useStyles } from './styles';

const InitialLoad = () => {
  const { theme } = useSettingsContext();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        {theme === 'light' ? (
          <BigDipperLogoRed />
        ) : (
          <BigDipperLogoWhite />
        )}
        <LinearProgress className={classes.divider} />
        <img src="/logo-desmos.png" className={classes.logo} alt="logo" />
      </div>
    </div>
  );
};

export default InitialLoad;

import React from 'react';
import * as R from 'ramda';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import BigDipperLogoRed from '@assets/big-dipper-red.svg';
import { useSettingsContext } from '@contexts';
import { LinearProgress } from '@material-ui/core';
import { chainConfig } from '@configs';
import { useStyles } from './styles';

const InitialLoad = () => {
  const { theme } = useSettingsContext();
  const classes = useStyles();

  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  return (
    <>
      <div className={classes.root}>
        <div>
          <img src={logoUrl} className={classes.logo} alt="logo" />
          <LinearProgress className={classes.divider} />
          {theme === 'light' ? (
            <BigDipperLogoRed />
          ) : (
            <BigDipperLogoWhite />
          )}
        </div>
      </div>
    </>
  );
};

export default InitialLoad;

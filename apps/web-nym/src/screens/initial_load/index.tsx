import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import { LinearProgress } from '@material-ui/core';
import { readTheme } from '@recoil/settings';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ChainIcon from 'ui/dist/components/ChainIcon';
import { useStyles } from './styles';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <ChainIcon type="logo" className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        {theme === 'light' ? <BigDipperLogoRed /> : <BigDipperLogoWhite />}
      </div>
    </div>
  );
};

export default InitialLoad;

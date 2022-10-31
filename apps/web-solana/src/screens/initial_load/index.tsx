import React from 'react'
import * as R from 'ramda';
import { useRecoilValue } from 'recoil';
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
        <BigDipperLogoRed />
      </div>
    </div>
  );
};

export default InitialLoad;

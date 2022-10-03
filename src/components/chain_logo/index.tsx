import React from 'react';
import LightUrl from '@assets/chain-logo-light.svg?url';
import DarkUrl from '@assets/chain-logo-dark.svg?url';
import classnames from 'classnames';
import { useStyles } from '../chain_icon/useStyles';

const Logo = ({
  className, ...props
}: JSX.IntrinsicElements['img']) => {
  const classes = useStyles();
  return (
    <>
      <img src={LightUrl} alt="" {...props} className={classnames(className, classes.light)} />
      <img src={DarkUrl} alt="" {...props} className={classnames(className, classes.dark)} />
    </>
  );
};

export default Logo;

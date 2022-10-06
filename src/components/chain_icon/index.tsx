import React from 'react';
import LightUrl from '@assets/chain-icon-light.svg?url';
import DarkUrl from '@assets/chain-icon-dark.svg?url';
import classnames from 'classnames';
import { useStyles } from './useStyles';

const Icon = ({
  className, src: _, ...props
}: JSX.IntrinsicElements['img']) => {
  const classes = useStyles();
  return (
    <>
      <img src={LightUrl} alt="" {...props} className={classnames(className, classes.light)} />
      <img src={DarkUrl} alt="" {...props} className={classnames(className, classes.dark)} />
    </>
  );
};

export default Icon;

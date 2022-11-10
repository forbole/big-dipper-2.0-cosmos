import React from 'react';
import { Box, BoxProps } from '@material-ui/core';

const Component = Box as React.FC<BoxProps>;

function Index(props: BoxProps) {
  return <Component {...props} />;
}

export default Index;

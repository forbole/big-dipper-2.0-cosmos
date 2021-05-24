import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { Box } from '@components';
import { useStyles } from './styles';
import { BlocksProvider } from './contexts/blocks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <BlocksProvider>
      <Box className={classnames(className, classes.root)}>
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
      </Box>
    </BlocksProvider>
  );
};

export default List;

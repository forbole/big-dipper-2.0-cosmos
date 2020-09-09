import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import {
  Mobile, Desktop,
} from './components';
import { useStyles } from './styles';
import { BlocksProvider } from './contexts/blocks';

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

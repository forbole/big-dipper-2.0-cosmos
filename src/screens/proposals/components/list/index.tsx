import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import {
  Mobile,
  Desktop,
  Total,
  Search,
} from './components';
import { useStyles } from './styles';
import { TokensProvider } from './contexts/tokens';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <TokensProvider>
      <Box className={classnames(className, classes.root)}>
        <div className={classes.topContent}>
          <Total className={classes.total} />
          <Search className={classes.search} />
        </div>
        <div className={classes.list}>
          <Mobile className={classes.mobile} />
          <Desktop className={classes.desktop} />
        </div>
      </Box>
    </TokensProvider>
  );
};

export default List;

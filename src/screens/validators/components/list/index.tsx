import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import {
  Mobile,
  Desktop,
  Tabs,
} from './components';
import { useStyles } from './styles';
import { ValidatorsProvider } from './contexts/validators';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  return (
    <ValidatorsProvider>
      <Box className={classnames(className, classes.root)}>
        <Tabs />
        <div className={classes.list}>
          <Mobile className={classes.mobile} />
          <Desktop className={classes.desktop} />
        </div>
      </Box>
    </ValidatorsProvider>
  );
};

export default List;

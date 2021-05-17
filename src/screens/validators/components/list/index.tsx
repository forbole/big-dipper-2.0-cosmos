import React from 'react';
import classnames from 'classnames';
import {
  Box, NoData,
} from '@components';
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
      {
        ({ itemsLength }) => {
          return (
            <Box className={classnames(className)}>
              <Tabs />
              <div className={classes.list}>
                {
                  itemsLength ? (
                    <>
                      <Mobile className={classes.mobile} />
                      <Desktop className={classes.desktop} />
                    </>
                  ) : (
                    <NoData />
                  )
                }
              </div>
            </Box>
          );
        }
      }
    </ValidatorsProvider>
  );
};

export default List;

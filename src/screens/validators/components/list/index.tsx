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
import { useValidators } from './hooks';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    state,
    handleTabChange,
    handleSearch,
  } = useValidators();
  return (
    <ValidatorsProvider>
      {
        ({ itemsLength }) => {
          return (
            <Box className={classnames(className)}>
              <Tabs
                tab={state.tab}
                handleTabChange={handleTabChange}
                handleSearch={handleSearch}
              />
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

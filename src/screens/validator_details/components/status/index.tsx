import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Status: React.FC<{
  className?: string;
}> = (props) => {
  return (
    <Box className={classnames(props.className)}>
      status
    </Box>
  );
};

export default Status;

import React from 'react';
import classnames from 'classnames';
import {
  Typography,
} from '@material-ui/core';
import {
  Box,
  Avatar,
} from '@components';
import { useStyles } from './styles';

const DesmosProfileBio: React.FC<{
  className?: string;
  dtag: string;
  nickname: string;
  imageUrl: string | null;
}> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar
        address={props.dtag}
        imageUrl={props.imageUrl}
        className={classes.avatar}
      />
      <div className={classes.description}>
        <Typography variant="h2">
          {props.nickname}
        </Typography>
        <Typography variant="body1">
          @
          {props.dtag}
        </Typography>
      </div>
    </Box>
  );
};

export default DesmosProfileBio;

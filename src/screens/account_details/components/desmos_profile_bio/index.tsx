import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  Box,
  Avatar,
  Markdown,
} from '@components';
import { useStyles } from './styles';

const DesmosProfileBio: React.FC<{
  className?: string;
  dtag: string;
  nickname: string;
  imageUrl: string;
  bio: string;
}> = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.profile}>
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
      </div>
      {
        props.bio && (
          <>
            <Divider className={classes.divider} />
            <Markdown>
              {props.bio}
            </Markdown>
          </>
        )
      }
    </Box>
  );
};

export default DesmosProfileBio;

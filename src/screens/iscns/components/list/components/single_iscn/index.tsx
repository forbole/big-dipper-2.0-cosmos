import React from 'react';
import { Typography } from '@material-ui/core';
import { ItemType } from '../../../../types';
import { useStyles } from './styles';

const SingleIscn = (props:ItemType) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href={props.iscnData.url} target="_blank" rel="noreferrer" className={classes.title}>
        <Typography variant="h2">
          {props.iscnData.name}
        </Typography>
      </a>
      <Typography variant="caption">
        {props.iscnId}
      </Typography>
      <Typography variant="body2" className={classes.publisher}>
        {props.iscnData.publisher}
      </Typography>
    </div>
  );
};

export default SingleIscn;

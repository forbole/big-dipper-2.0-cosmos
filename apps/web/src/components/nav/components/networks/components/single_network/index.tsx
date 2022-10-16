import React from 'react';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import { useStyles } from './styles';

const SingleNetwork = (props: {
  url: string;
  chainId: string;
  name: string;
  className: string;
}) => {
  const {
    url,
    chainId,
    name,
    className,
  } = props;
  const classes = useStyles();
  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes.root}>
      <div className={classes.item}>
        <p>{chainId}</p>
        <Typography
          className={classnames(className, classes.status)}
          component="div"
          variant="caption"
        >
          {name}
        </Typography>
      </div>
    </a>
  );
};

export default SingleNetwork;

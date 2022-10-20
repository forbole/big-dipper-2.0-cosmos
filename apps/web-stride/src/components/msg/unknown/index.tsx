import React from 'react';
import { MsgUnknown } from '@models';
import { useGetStyles } from './styles';

const Unknown = (props: {
  message: MsgUnknown;
}) => {
  const { message } = props;

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>
        {JSON.stringify(message.json, null, '\t')}
      </code>
    </pre>
  );
};

export default Unknown;

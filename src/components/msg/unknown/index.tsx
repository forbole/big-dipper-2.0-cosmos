import React from 'react';
import { MsgUnknown } from '@models';
import { useGetStyles } from './styles';

const Unknown = (props: { message: MsgUnknown;
}) => {
  const { message } = props;

  // our(cheqd) messages don't have "json" field
  const data = message.json;

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>
        {JSON.stringify(data, null, '\t')}
      </code>
    </pre>
  );
};

export default Unknown;

import React from 'react';
import { type MsgUnknown } from '@/models';
import { useGetStyles } from '@/components/msg/unknown/styles';

const Unknown: React.FC<{ message: MsgUnknown }> = (props) => {
  const { message } = props;

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>{JSON.stringify(message.json, null, '\t')}</code>
    </pre>
  );
};

export default Unknown;

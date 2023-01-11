import useStyles from '@/components/msg/unknown/styles';
import { type MsgUnknown } from '@/models';
import React, { FC } from 'react';

const Unknown: FC<{ message: MsgUnknown }> = (props) => {
  const { message } = props;

  const { classes } = useStyles();
  return (
    <pre className={classes.root}>
      <code>{JSON.stringify(message.json, null, '\t')}</code>
    </pre>
  );
};

export default Unknown;

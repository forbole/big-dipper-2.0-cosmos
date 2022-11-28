import { useGetStyles } from '@/screens/transaction_details/components/code_block/styles';
import React from 'react';

const CodeBlock: React.FC<{ message: string }> = (props) => {
  const { message } = props;

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>
        {/* {JSON.stringify(message, null, '\t')} */}
        {message}
      </code>
    </pre>
  );
};

export default CodeBlock;

import { FC } from 'react';
import useStyles from '@/screens/transaction_details/components/code_block/styles';

const CodeBlock: FC<{ message: string }> = (props) => {
  const { message } = props;

  const { classes } = useStyles();
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

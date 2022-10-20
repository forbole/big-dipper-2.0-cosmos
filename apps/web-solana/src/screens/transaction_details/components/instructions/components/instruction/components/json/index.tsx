import React from 'react';
import { InstructionBase } from '@models';
import { useGetStyles } from './styles';

const Json: React.FC<{instruction: InstructionBase} & ComponentDefault> = (props) => {
  const { classes } = useGetStyles();
  return (
    <div>
      <pre className={classes.root}>
        <code>
          {JSON.stringify(props.instruction.json, null, '\t')}
        </code>
      </pre>
    </div>
  );
};

export default Json;

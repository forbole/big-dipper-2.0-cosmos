import React from 'react';
import { FormattedInstructionType } from '../../types';
import { Json } from '..';

const DisplayInstruction: React.FC<{
  raw: boolean;
  instruction: FormattedInstructionType;
} & ComponentDefault> = (props) => {
  const Component: any = props.raw ? Json : props.instruction.component;

  return (
    <Component
      instruction={props.instruction.data}
    />
  );
};

export default DisplayInstruction;

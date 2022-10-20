import React from 'react';
import { InstructionBase } from '@models';

export type InstructionState = {
  hide: boolean;
  raw: boolean;
  instructions: FormattedInstructionType[];
}

export type ProgramInfoModelType = {
  type: string;
  model: typeof InstructionBase;
  component: React.ReactNode;
}

export type ProgramInfoType = {
  [address: string]: {
    name: string;
    types: ProgramInfoModelType[];
  }
}

export type FormattedInstructionType = {
  label: string;
  data: InstructionBase;
  component: React.ReactNode;
};

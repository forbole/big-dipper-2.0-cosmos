import { InstructionType } from '../../types';

export type BatchInstructionsType = {
  [value: number]: InstructionType[];
}

export type SortedBatchInstructionsType = InstructionType[][];

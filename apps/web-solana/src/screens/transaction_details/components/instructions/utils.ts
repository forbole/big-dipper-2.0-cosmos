import * as R from 'ramda';
import { InstructionType } from '../../types';
import {
  BatchInstructionsType, SortedBatchInstructionsType,
} from './types';

/**
 * Helper function to combine instructions and their inner instructions by index
 * @param instructions
 * @returns
 */
export const batchInstructions = (instructions: InstructionType[]): SortedBatchInstructionsType => {
  const results = {};
  instructions.forEach((instruction) => {
    if (results[instruction.index]) {
      results[instruction.index].push(instruction);
    } else {
      results[instruction.index] = [instruction];
    }
  });
  return sortInstructions(results);
};

/**
 * Helper function to sort the instructions
 */
export const sortInstructions = (
  instructions: BatchInstructionsType,
): SortedBatchInstructionsType => {
  const batchKeys = R.keys(instructions).sort((a, b) => { return a - b; });
  const results = [];
  batchKeys.forEach((x) => {
    const singleBatch = instructions[x];
    if (singleBatch.length > 1) { // it has inner instructions
      singleBatch.sort((a, b) => (a.innerIndex > b.innerIndex ? 1 : -1));
    }
    results.push(singleBatch);
  });
  return results;
};

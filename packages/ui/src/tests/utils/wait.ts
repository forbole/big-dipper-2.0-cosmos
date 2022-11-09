import type { act } from 'react-test-renderer';

/**
 * helper test util to wait for the dom to update
 * before asserting tests
 * @param ms
 */
export const wait = async (rendererAct: typeof act, ms = 50) => {
  await rendererAct(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
};

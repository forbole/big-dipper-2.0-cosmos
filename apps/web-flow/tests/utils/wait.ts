import renderer from 'react-test-renderer';

/**
 * helper test util to wait for the dom to update
 * before asserting tests
 * @param ms
 */
export const wait = async (ms = 50) => {
  await renderer.act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
};

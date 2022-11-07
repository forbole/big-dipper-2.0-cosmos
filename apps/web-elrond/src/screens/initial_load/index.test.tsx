import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import InitialLoad from '.';

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', async () => {
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer
        .create(
          <MockTheme>
            <InitialLoad />
          </MockTheme>
        )
        .toJSON();
    });
    await wait();

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
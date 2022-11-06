import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import Blocks from '.';

// ==================================
// unit tests
// ==================================
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('./components', () => ({
  List: (props: JSX.IntrinsicElements['div']) => <div id="List" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer
        .create(
          <MockTheme>
            <Blocks />
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

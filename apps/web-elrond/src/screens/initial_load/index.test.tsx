import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import InitialLoad from '.';

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <InitialLoad />
        </MockTheme>
      );
    });
    await wait(renderer.act);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import LinearLoading from 'ui/components/linear_loading';

// ==================================
// unit tests
// ==================================
describe('component: LinearLoading', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LinearLoading />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

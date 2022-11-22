import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import SingleBlock from '.';

// ==================================
// unit tests
// ==================================
describe('screen: Home/SingleBlock', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleBlock label="Price" value="$4.40" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

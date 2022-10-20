import React from 'react';
import renderer from 'react-test-renderer';
import SingleBlock from '.';

// ==================================
// unit tests
// ==================================
describe('screen: Home/SingleBlock', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <SingleBlock
        label="Price"
        value="$4.40"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

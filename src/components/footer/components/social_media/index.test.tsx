import React from 'react';
import renderer from 'react-test-renderer';
import SocialMedia from '.';

// ==================================
// unit tests
// ==================================
describe('component: layout/footer', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <SocialMedia />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

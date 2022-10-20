import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SocialMedia from '.';

// ==================================
// unit tests
// ==================================
describe('component: layout/footer', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SocialMedia />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

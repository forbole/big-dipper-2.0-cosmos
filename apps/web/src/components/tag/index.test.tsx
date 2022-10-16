import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Tag from '.';

// ==================================
// unit tests
// ==================================
describe('components: Tag', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Tag value="hello world" theme="one" />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

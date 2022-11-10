import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Loading from '.';

// ==================================
// unit tests
// ==================================
describe('components: Loading', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Loading />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import SortArrows from '.';

// ==================================
// unit tests
// ==================================
describe('component: SortArrows', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SortArrows />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

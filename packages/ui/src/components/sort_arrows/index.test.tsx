import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import SortArrows from '@/components/sort_arrows';

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
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

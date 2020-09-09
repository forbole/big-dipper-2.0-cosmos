import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import StackBar from '.';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: TokenDetails/StackBar', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <StackBar percentage={30} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

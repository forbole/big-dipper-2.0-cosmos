import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Condition from '.';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Condition', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Condition />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

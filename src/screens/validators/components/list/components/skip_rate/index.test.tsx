import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SkipRate from '.';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: Validators/SkipRate', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SkipRate
          content="content"
          percentage={30}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

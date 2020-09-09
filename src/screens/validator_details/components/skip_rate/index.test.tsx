import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SkipRate from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: ValidatorDetails/SkipRate', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SkipRate />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Blocks from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  NotFound: (props) => <div id="NotFound" {...props} />,
  LinearLoading: (props) => <div id="LinearLoading" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Blocks />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

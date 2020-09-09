import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Tokens from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  List: (props) => <div id="List" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Tokens', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Tokens />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

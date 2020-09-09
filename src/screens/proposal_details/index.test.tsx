import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TokenDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Market: (props) => <div id="Market" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
  Holders: (props) => <div id="Holders" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TokenDetails', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TokenDetails />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

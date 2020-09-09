import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import BlockDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <BlockDetails />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

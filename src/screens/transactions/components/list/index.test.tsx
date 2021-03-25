import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <List />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

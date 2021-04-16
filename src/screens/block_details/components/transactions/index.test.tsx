import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

jest.mock('../../contexts/block', () => ({
  useBlockContext: () => {
    return ({
      rawData: {
        transactions: [],
      },
      uiData: {
        transactions: [{
          block: (
            <div>block</div>
          ),
          hash: (
            <div>hash</div>
          ),
          result: (
            <div>result</div>
          ),
          time: 'time',
          messages: '12',
        }],
      },
    });
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Transactions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Transactions />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

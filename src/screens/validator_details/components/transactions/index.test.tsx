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

const mockTransactionsContext = {
  hasNextPage: true,
  isNextPageLoading: false,
  items: [],
  loadNextPage: jest.fn(),
  itemCount: jest.fn(),
  loadMoreItems: jest.fn(),
  isItemLoaded: jest.fn(),
};

jest.mock('./contexts/transactions', () => ({
  TransactionsProvider: 'TransactionsProvider',
  useTransactionsContext: jest.fn(),
  TransactionsContext: {
    Consumer: ({ children }) => children(mockTransactionsContext),
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

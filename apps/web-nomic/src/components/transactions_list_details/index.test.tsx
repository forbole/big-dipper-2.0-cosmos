import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import TransactionsListDetails from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('ui/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

jest.mock('./components/list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="List" {...props} />
));

const txs = [
  {
    height: 1212131,
    hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
    timestamp: '2021-05-24T05:28:05.839448',
  },
];

const props = {
  hasNextPage: false,
  isNextPageLoading: false,
  loadNextPage: () => jest.fn(),
  loadMoreItems: () => jest.fn(),
  isItemLoaded: () => false,
  itemCount: 1,
  transactions: txs,
};

const emptyProps = {
  hasNextPage: true,
  isNextPageLoading: false,
  loadNextPage: () => jest.fn(),
  loadMoreItems: () => jest.fn(),
  isItemLoaded: () => true,
  itemCount: 0,
  transactions: [],
};

// ==================================
// unit tests
// ==================================
describe('component: TransactionsListDetails', () => {
  it('matches snapshot', () => {
    component = renderer.create(
      <MockTheme>
        <TransactionsListDetails {...props} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles empty data correctly', () => {
    component = renderer.create(
      <MockTheme>
        <TransactionsListDetails {...emptyProps} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

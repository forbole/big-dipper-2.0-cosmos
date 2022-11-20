import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import TransactionsList from '.';

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

const txs = [
  {
    height: 1212131,
    hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
    timestamp: '2021-05-24T05:28:05.839448',
  },
];

const props = {
  hasNextPage: true,
  isNextPageLoading: false,
  loadNextPage: () => jest.fn(),
  loadMoreItems: () => jest.fn(),
  isItemLoaded: () => false,
  itemCount: 1,
  transactions: txs,
};

// ==================================
// unit tests
// ==================================
describe('component: TransactionsList', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <TransactionsList {...props} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

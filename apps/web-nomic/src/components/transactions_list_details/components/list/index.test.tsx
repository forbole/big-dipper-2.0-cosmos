import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import TransactionList from '.';

// ==================================
// mocks
// ==================================

jest.mock('react-window-infinite-loader', () => ({
  InfiniteLoader: (props: JSX.IntrinsicElements['div']) => <div id="InfiniteLoader" {...props} />,
}));

jest.mock('ui/components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" {...props} />
));

jest.mock('./components/single_transaction', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleTransaction" {...props} />
));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('component: TransactionsListDetails/TransactionList', () => {
  it('matches snapshot', () => {
    const txs = [
      {
        height: 1212131,
        hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
        success: true,
        timestamp: '2021-05-24T05:28:05.839448',
      },
      {
        height: 1212132,
        hash: 'W0333447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
        success: true,
        timestamp: '2021-05-24T05:28:11.839448',
      },
    ];

    const txProps = {
      loadMoreItems: () => jest.fn(),
      isItemLoaded: () => false,
      itemCount: 2,
      transactions: txs,
    };
    const component = renderer.create(
      <MockTheme>
        <TransactionList {...txProps} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

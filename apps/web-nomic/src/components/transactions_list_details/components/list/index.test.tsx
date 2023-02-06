import renderer from 'react-test-renderer';
import TransactionList from '@/components/transactions_list_details/components/list';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================

jest.mock('react-window-infinite-loader', () => ({
  InfiniteLoader: (props: JSX.IntrinsicElements['div']) => <div id="InfiniteLoader" {...props} />,
}));

jest.mock('@/components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" {...props} />
));

jest.mock(
  '@/components/transactions_list_details/components/list/components/single_transaction',
  () => (props: JSX.IntrinsicElements['div']) => <div id="SingleTransaction" {...props} />
);

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

import { ComponentProps } from 'react';
import renderer from 'react-test-renderer';
import TransactionsList from '@/components/transactions_list';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

const txs: ComponentProps<typeof TransactionsList>['transactions'] = [
  {
    height: 1212131,
    hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
    type: ['cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'],
    success: true,
    timestamp: '2021-05-24T05:28:05.839448',
    messages: {
      count: 2,
      items: [
        {
          '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          delegator_address: 'desmos1r574p4zzhe0rq7w4acjwdqrejszjjz2lc4an7a',
          validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
        },
        {
          '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
          validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
        },
      ],
    },
  },
];

const props: ComponentProps<typeof TransactionsList> = {
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

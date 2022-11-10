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
        type: [''],
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
      {
        height: 1212132,
        hash: 'W0333447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
        type: [''],
        success: true,
        timestamp: '2021-05-24T05:28:11.839448',
        messages: {
          count: 1,
          items: [
            {
              '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
              delegator_address: 'desmos1r574p4zzhe0rq7w4acjwdqrejszjjz2lc4an7a',
              validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
            },
          ],
        },
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
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

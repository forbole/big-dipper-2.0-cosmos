import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { RecoilRoot } from 'recoil';
import TransactionList from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

const txs = [{
  height: 1212131,
  hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
  type: ['cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'],
  success: true,
  timestamp: '2021-05-24T05:28:05.839448',
  messages: {
    count: 2,
    items: [{
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', delegator_address: 'desmos1r574p4zzhe0rq7w4acjwdqrejszjjz2lc4an7a', validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
    }, {
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
    }],
  },
},
{
  height: 1212132,
  hash: 'W0333447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
  type: ['cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'],
  success: true,
  timestamp: '2021-05-24T05:28:11.839448',
  messages: {
    count: 2,
    items: [{
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', delegator_address: 'desmos1r574p4zzhe0rq7w4acjwdqrejszjjz2lc4an7a', validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
    }, {
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', validator_address: 'desmosvaloper1r574p4zzhe0rq7w4acjwdqrejszjjz2lxc4850',
    }],
  },
},
];

const props = {
  loadMoreItems: () => jest.fn(),
  isItemLoaded: () => false,
  itemCount: 1,
  transactions: txs,
};

// ==================================
// unit tests
// ==================================
describe('component: TransactionList', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <TransactionList {...props} />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

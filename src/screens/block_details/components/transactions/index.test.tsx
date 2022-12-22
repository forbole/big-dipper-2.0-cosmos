import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
  TransactionListDetails: (props) => <div id="TransactionListDetails" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Transactions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Transactions
            transactions={[
              {
                height: 300,
                hash: 'hash',
                type: [],
                success: false,
                timestamp: '',
                type: [''],
                messages: {
                  count: 2,
                  items: [
                    {
                      '@type': '/cosmos.staking.v1beta1.MsgDelegate',
                      amount: {
                        denom: 'udaric',
                        amount: '8371578',
                      },
                      delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                      validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                    },
                    {
                      '@type': '/cosmos.staking.v1beta1.MsgDelegate',
                      amount: {
                        denom: 'udaric',
                        amount: '1233',
                      },
                      delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                      validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                    },
                  ],
                },
              },
              {
                height: 301,
                hash: 'hash1',
                type: [],
                success: true,
                timestamp: '',
                type: [''],
                messages: {
                  count: 3,
                  items: [
                    {
                      '@type': '/cosmos.staking.v1beta1.MsgDelegate',
                      amount: {
                        denom: 'udaric',
                        amount: '44444',
                      },
                      delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                      validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                    },
                    {
                      '@type': '/cosmos.staking.v1beta1.MsgDelegate',
                      amount: {
                        denom: 'udaric',
                        amount: '12211',
                      },
                      delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                      validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                    },
                    {
                      '@type': '/cosmos.staking.v1beta1.MsgDelegate',
                      amount: {
                        denom: 'udaric',
                        amount: '11111',
                      },
                      delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                      validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                    },
                  ],
                },
              },
            ]}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgWithdrawDelegatorReward } from '@models';
import WithdrawReward from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/WithdrawReward', () => {
  it('matches snapshot', () => {
    const message = new MsgWithdrawDelegatorReward({
      category: 'distribution',
      type: 'MsgWithdrawDelegatorReward',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
      amounts: [
        {
          value: '3000000',
          displayDenom: 'udaric',
          exponent: 6,
        },
      ],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <WithdrawReward
            message={message}
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

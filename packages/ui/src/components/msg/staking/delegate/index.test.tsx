import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import { MsgDelegate } from '@/models';
import Delegate from '@/components/msg/staking/delegate';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgDelegate', () => {
  it('matches snapshot', () => {
    const message = MsgDelegate.fromJson({
      category: 'staking',
      type: 'MsgCreateValidator',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
      amount: {
        denom: 'udaric',
        amount: '10000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Delegate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

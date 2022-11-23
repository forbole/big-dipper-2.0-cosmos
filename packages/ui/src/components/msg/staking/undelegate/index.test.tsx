import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import { MsgUndelegate } from '@/models';
import Undelegate from '@/components/msg/staking/undelegate';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Undelegate', () => {
  it('matches snapshot', () => {
    const message = MsgUndelegate.fromJson({
      category: 'staking',
      type: 'MsgEditValidator',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
      amount: {
        denom: 'udaric',
        amount: '1000000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Undelegate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

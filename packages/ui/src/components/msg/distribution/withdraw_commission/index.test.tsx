import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgWithdrawValidatorCommission } from '@models';
import WithdrawCommission from '.';

// ==================================
// mocks
// =============================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/WithdrawCommission', () => {
  it('matches snapshot', () => {
    const message = MsgWithdrawValidatorCommission.fromJson({
      category: 'distribution',
      type: 'MsgWithdrawValidatorCommission',
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
      <MockTheme>
        <WithdrawCommission message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

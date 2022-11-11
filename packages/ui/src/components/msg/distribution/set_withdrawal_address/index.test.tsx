import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgSetWithdrawAddress } from '@models';
import SetWithdrawalAddress from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SetWithdrawalAddress', () => {
  it('matches snapshot', () => {
    const message = MsgSetWithdrawAddress.fromJson({
      category: 'distribution',
      type: 'MsgSetWithdrawAddress',
      delegatorAddress: 'delegatorAddress',
      withdrawalAddress: 'withdrawalAddress',
    });
    const component = renderer.create(
      <MockTheme>
        <SetWithdrawalAddress message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

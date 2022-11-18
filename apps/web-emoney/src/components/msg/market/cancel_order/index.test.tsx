import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCancelOrder from '@models/emoney/msg/market/msg_cancel_order';
import CancelOrder from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CancelOrder', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'market',
      type: 'MsgCancelOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
    } as MsgCancelOrder;
    const component = renderer.create(
      <MockTheme>
        <CancelOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
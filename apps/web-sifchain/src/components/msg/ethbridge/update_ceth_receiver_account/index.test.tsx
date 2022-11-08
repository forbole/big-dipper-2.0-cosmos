import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import MsgUpdateCethReceiverAccount from '@models/sifchain/msg/ethbridge/msg_update_ceth_receiver_account';
import UpdateCethReceiverAccount from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateEthBridgeClaim', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateCethReceiverAccount({
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
      cethReceiverAccount: 'cethReceiverAccount',
    });
    const component = renderer.create(
      <MockTheme>
        <UpdateCethReceiverAccount message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateCethReceiverAccount'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.cethReceiverAccount).toEqual(
      'cethReceiverAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

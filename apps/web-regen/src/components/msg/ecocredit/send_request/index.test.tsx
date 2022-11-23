import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgSendRequest from '@/models/msg/ecocredit/msg_send_request';
import SendRequest from '@/components/msg/ecocredit/send_request';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SendRequest', () => {
  it('matches snapshot', () => {
    const message: MsgSendRequest = {
      category: 'ecocredit',
      type: 'MsgCreateBatchRequest',
      sender: 'sender',
      recipient: 'recipient',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <SendRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgSendRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgDtagTransferRequest from '@models/desmos/msg/profiles/msg_dtag_transfer_request';
import DtagTransferRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DtagTransferRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgDtagTransferRequest({
      category: 'profiles',
      type: 'MsgDtagCancelTransfer',
      sender: 'sender',
      receiver: 'receiver',
    });
    const component = renderer.create(
      <MockTheme>
        <DtagTransferRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

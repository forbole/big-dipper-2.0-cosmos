import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgDtagAcceptTransfer from '@models/desmos/msg/profiles/msg_dtag_accept_transfer';
import DtagAcceptTransfer from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DtagAcceptTransfer', () => {
  it('matches snapshot', () => {
    const message: MsgDtagAcceptTransfer = {
      category: 'profiles',
      type: 'MsgDtagAcceptTransfer',
      sender: 'sender',
      receiver: 'receiver',
      newDtag: 'newDtag',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DtagAcceptTransfer message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

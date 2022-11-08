import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgDtagAcceptTransfer } from '@models';
import DtagAcceptTransfer from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DtagAcceptTransfer', () => {
  it('matches snapshot', () => {
    const message = MsgDtagAcceptTransfer.fromJson({
      category: 'profiles',
      type: 'MsgDtagAcceptTransfer',
      sender: 'sender',
      receiver: 'receiver',
      newDtag: 'newDtag',
    });
    const component = renderer.create(
      <MockTheme>
        <DtagAcceptTransfer message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

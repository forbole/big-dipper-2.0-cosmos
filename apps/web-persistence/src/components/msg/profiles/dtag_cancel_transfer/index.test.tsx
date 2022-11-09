import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgDtagCancelTransfer } from '@models';
import DtagCancelTransfer from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgDtagCancelTransfer', () => {
  it('matches snapshot', () => {
    const message = new MsgDtagCancelTransfer({
      category: 'profiles',
      type: 'MsgDtagCancelTransfer',
      sender: 'sender',
      receiver: 'receiver',
    });
    const component = renderer.create(
      <MockTheme>
        <DtagCancelTransfer message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

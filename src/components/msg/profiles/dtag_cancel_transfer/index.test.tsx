import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgDtagCancelTransfer } from '@models';
import DtagCancelTransfer from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

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
        <DtagCancelTransfer
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

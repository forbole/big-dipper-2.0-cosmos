import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgDtagAcceptTransfer } from '@models';
import DtagAcceptTransfer from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DtagAcceptTransfer', () => {
  it('matches snapshot', () => {
    const message = new MsgDtagAcceptTransfer({
      category: 'profiles',
      type: 'MsgDtagAcceptTransfer',
      sender: 'sender',
      receiver: 'receiver',
      newDtag: 'newDtag',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <DtagAcceptTransfer
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

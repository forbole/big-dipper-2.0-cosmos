import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSendRequest } from '@models';
import SendRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SendRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgSendRequest({
      category: 'ecocredit',
      type: 'MsgCreateBatchRequest',
      sender: 'sender',
      recipient: 'recipient',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SendRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgSendRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

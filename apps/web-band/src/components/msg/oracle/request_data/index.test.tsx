import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgRequestData from '@models/band/msg/oracle/msg_request_data';
import RequestData from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgRequestData({
      type: 'MsgBlockUser',
      sender: 'sender',
      oracleScriptId: 100,
    });
    const component = renderer.create(
      <MockTheme>
        <RequestData message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgCreateGroupAccountRequest from '@/models/msg/group/msg_create_group_account_request';
import CreateGroupAccountRequest from '@/components/msg/group/create_group_account_request';

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
describe('screen: TransactionDetails/CreateGroupAccountRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateGroupAccountRequest = {
      category: 'group',
      type: 'MsgCreateGroupAccountRequest',
      admin: 'admin',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <CreateGroupAccountRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateGroupAccountRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupAdminRequest from '@src/models/regen/msg/group/msg_update_group_admin_request';
import UpdateGroupAdminRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================

describe('screen: TransactionDetails/UpdateGroupAdminRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateGroupAdminRequest({
      category: 'group',
      type: 'MsgUpdateGroupAdminRequest',
      admin: 'admin',
      newAdmin: 'newAdmin',
    });

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAdminRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAdminRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

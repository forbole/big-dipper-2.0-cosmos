import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupAccountMetadataRequest from '@models/regen/msg/group/msg_update_group_account_metadata_request';
import UpdateGroupAccountMetadataRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateGroupAccountMetadataRequest', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'group',
      type: 'MsgUpdateGroupAccountMetadataRequest',
      admin: 'admin',
      address: 'address',
    } as MsgUpdateGroupAccountMetadataRequest;

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountMetadataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountMetadataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupAccountDecisionPolicyRequest from '@models/regen/msg/group/msg_update_group_account_decision_policy_request';
import UpdateGroupAccountDecisionPolicyRequest from '.';

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
describe('screen: TransactionDetails/UpdateGroupAccountDecisionPolicyRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupAccountDecisionPolicyRequest = {
      category: 'group',
      type: 'MsgUpdateGroupAccountDecisionPolicyRequest',
      admin: 'admin',
      address: 'address',
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountDecisionPolicyRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountDecisionPolicyRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

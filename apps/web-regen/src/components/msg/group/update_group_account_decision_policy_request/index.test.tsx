import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateGroupAccountDecisionPolicyRequest } from '@models';
import UpdateGroupAccountDecisionPolicyRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateGroupAccountDecisionPolicyRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateGroupAccountDecisionPolicyRequest({
      category: 'group',
      type: 'MsgUpdateGroupAccountDecisionPolicyRequest',
      admin: 'admin',
      address: 'address',
    });

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountDecisionPolicyRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountDecisionPolicyRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

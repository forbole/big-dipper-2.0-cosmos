import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateGroupAccountDecisionPolicyRequest } from '@models';
import UpdateGroupAccountDecisionPolicyRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

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
      <RecoilRoot>
        <MockTheme>
          <UpdateGroupAccountDecisionPolicyRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgUpdateGroupAccountDecisionPolicyRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import UpdateGroupAccountDecisionPolicyRequest from '@/components/msg/group/update_group_account_decision_policy_request';
import MsgUpdateGroupAccountDecisionPolicyRequest from '@/models/msg/group/msg_update_group_account_decision_policy_request';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
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
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountDecisionPolicyRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountDecisionPolicyRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

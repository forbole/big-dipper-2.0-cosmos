import renderer from 'react-test-renderer';
import SetUserGroupPermissions from '@/components/msg/subspaces/set_user_group_permissions';
import MsgSetUserGroupPermissions from '@/models/msg/subspaces/msg_set_user_group_permissions';
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
describe('screen: TransactionDetails/SetUserGroupPermissions', () => {
  it('matches snapshot', () => {
    const message: MsgSetUserGroupPermissions = {
      category: 'subspaces',
      type: 'MsgSetUserGroupPermissions',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <SetUserGroupPermissions message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

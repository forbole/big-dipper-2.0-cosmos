import renderer from 'react-test-renderer';
import AddUserToUserGroup from '@/components/msg/subspaces/add_user_to_user_group';
import MsgAddUserToUserGroup from '@/models/msg/subspaces/msg_add_user_to_user_group';
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
describe('screen: TransactionDetails/AddUserToUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgAddUserToUserGroup = {
      category: 'subspaces',
      type: 'MsgAddUserToUserGroup',
      signer: 'signer',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddUserToUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

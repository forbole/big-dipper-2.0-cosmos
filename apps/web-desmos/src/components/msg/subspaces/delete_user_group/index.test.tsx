import renderer from 'react-test-renderer';
import DeleteUserGroup from '@/components/msg/subspaces/delete_user_group';
import MsgDeleteUserGroup from '@/models/msg/subspaces/msg_delete_user_group';
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
describe('screen: TransactionDetails/DeleteUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgDeleteUserGroup = {
      category: 'subspaces',
      type: 'MsgDeleteUserGroup',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeleteUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

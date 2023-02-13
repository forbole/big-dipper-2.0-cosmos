import renderer from 'react-test-renderer';
import RemoveUserFromUserGroup from '@/components/msg/subspaces/remove_user_from_user_group';
import MsgRemoveUserFromUserGroup from '@/models/msg/subspaces/msg_remove_user_from_user_group';
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
describe('screen: TransactionDetails/RemoveUserFromUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveUserFromUserGroup = {
      category: 'subspaces',
      type: 'MsgRemoveUserFromUserGroup',
      signer: 'signer',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveUserFromUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

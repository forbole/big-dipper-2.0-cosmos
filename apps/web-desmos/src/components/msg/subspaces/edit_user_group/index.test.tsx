import renderer from 'react-test-renderer';
import EditUserGroup from '@/components/msg/subspaces/edit_user_group';
import MsgEditUserGroup from '@/models/msg/subspaces/msg_edit_user_group';
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
describe('screen: TransactionDetails/EditUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgEditUserGroup = {
      category: 'subspaces',
      type: 'MsgEditUserGroup',
      signer: 'signer',
      description: 'description',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

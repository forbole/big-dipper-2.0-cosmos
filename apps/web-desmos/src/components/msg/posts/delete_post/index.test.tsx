import renderer from 'react-test-renderer';
import DeletePost from '@/components/msg/posts/delete_post';
import MsgDeletePost from '@/models/msg/posts/msg_delete_post';
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
describe('screen: TransactionDetails/DeletePost', () => {
  it('matches snapshot', () => {
    const message: MsgDeletePost = {
      category: 'posts',
      type: 'MsgDeletePost',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeletePost message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import CreatePost from '@/components/msg/posts/create_post';
import MsgCreatePost from '@/models/msg/posts/msg_create_post';
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
describe('screen: TransactionDetails/CreatePost', () => {
  it('matches snapshot', () => {
    const message: MsgCreatePost = {
      category: 'posts',
      type: 'MsgCreatePost',
      author: 'author',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreatePost message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

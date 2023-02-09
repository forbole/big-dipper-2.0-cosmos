import renderer from 'react-test-renderer';
import EditPost from '@/components/msg/posts/edit_post';
import MsgEditPost from '@/models/msg/posts/msg_edit_post';
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
describe('screen: TransactionDetails/EditPost', () => {
  it('matches snapshot', () => {
    const message: MsgEditPost = {
      category: 'posts',
      type: 'MsgEditPost',
      editor: 'editor',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditPost message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

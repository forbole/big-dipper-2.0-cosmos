import renderer from 'react-test-renderer';
import AddPostAttachment from '@/components/msg/posts/add_post_attachment';
import MsgAddPostAttachment from '@/models/msg/posts/msg_add_post_attachment';
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
describe('screen: TransactionDetails/AddPostAttachment', () => {
  it('matches snapshot', () => {
    const message: MsgAddPostAttachment = {
      category: 'posts',
      type: 'MsgAddPostAttachment',
      editor: 'editor',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddPostAttachment message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

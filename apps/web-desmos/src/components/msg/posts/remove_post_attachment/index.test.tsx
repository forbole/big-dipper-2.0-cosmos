import renderer from 'react-test-renderer';
import RemovePostAttachment from '@/components/msg/posts/remove_post_attachment';
import MsgRemovePostAttachment from '@/models/msg/posts/msg_remove_post_attachment';
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
describe('screen: TransactionDetails/RemovePostAttachment', () => {
  it('matches snapshot', () => {
    const message: MsgRemovePostAttachment = {
      category: 'posts',
      type: 'MsgRemovePostAttachment',
      editor: 'editor',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemovePostAttachment message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

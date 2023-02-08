import renderer from 'react-test-renderer';
import RemoveReaction from '@/components/msg/reactions/remove_reaction';
import MsgRemoveReaction from '@/models/msg/reactions/msg_remove_reaction';
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
describe('screen: TransactionDetails/RemoveReaction', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveReaction = {
      category: 'reactions',
      type: 'MsgRemoveReaction',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveReaction message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

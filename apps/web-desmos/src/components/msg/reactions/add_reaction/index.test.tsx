import renderer from 'react-test-renderer';
import AddReaction from '@/components/msg/reactions/add_reaction';
import MsgAddReaction from '@/models/msg/reactions/msg_add_reaction';
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
describe('screen: TransactionDetails/AddReaction', () => {
  it('matches snapshot', () => {
    const message: MsgAddReaction = {
      category: 'reactions',
      type: 'MsgAddReaction',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddReaction message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

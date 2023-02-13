import renderer from 'react-test-renderer';
import RemoveRegisteredReaction from '@/components/msg/reactions/remove_registered_reaction';
import MsgRemoveRegisteredReaction from '@/models/msg/reactions/msg_remove_registered_reaction';
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
describe('screen: TransactionDetails/RemoveRegisteredReaction', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveRegisteredReaction = {
      category: 'reactions',
      type: 'MsgRemoveRegisteredReaction',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveRegisteredReaction message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

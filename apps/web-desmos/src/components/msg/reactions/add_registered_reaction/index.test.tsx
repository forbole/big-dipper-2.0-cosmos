import renderer from 'react-test-renderer';
import AddRegisteredReaction from '@/components/msg/reactions/add_registered_reaction';
import MsgAddRegisteredReaction from '@/models/msg/reactions/msg_add_registered_reaction';
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
describe('screen: TransactionDetails/AddRegisteredReaction', () => {
  it('matches snapshot', () => {
    const message: MsgAddRegisteredReaction = {
      category: 'reactions',
      type: 'MsgAddRegisteredReaction',
      user: 'user',
      displayValue: 'displayValue',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddRegisteredReaction message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

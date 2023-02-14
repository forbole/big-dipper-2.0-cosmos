import renderer from 'react-test-renderer';
import EditRegisteredReaction from '@/components/msg/reactions/edit_registered_reaction';
import MsgEditRegisteredReaction from '@/models/msg/reactions/msg_edit_registered_reaction';
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
describe('screen: TransactionDetails/EditRegisteredReaction', () => {
  it('matches snapshot', () => {
    const message: MsgEditRegisteredReaction = {
      category: 'reactions',
      type: 'MsgEditRegisteredReaction',
      user: 'user',
      displayValue: 'displayValue',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditRegisteredReaction message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

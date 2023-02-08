import renderer from 'react-test-renderer';
import SetReactionsParams from '@/components/msg/reactions/set_reactions_params';
import MsgSetReactionsParams from '@/models/msg/reactions/msg_set_reactions_params';
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
describe('screen: TransactionDetails/SetReactionsParams', () => {
  it('matches snapshot', () => {
    const message: MsgSetReactionsParams = {
      category: 'reactions',
      type: 'MsgSetReactionsParams',
      user: 'user',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <SetReactionsParams message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

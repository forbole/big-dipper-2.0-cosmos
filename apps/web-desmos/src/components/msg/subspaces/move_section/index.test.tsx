import renderer from 'react-test-renderer';
import MoveSection from '@/components/msg/subspaces/move_section';
import MsgMoveSection from '@/models/msg/subspaces/msg_move_section';
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
describe('screen: TransactionDetails/MoveSection', () => {
  it('matches snapshot', () => {
    const message: MsgMoveSection = {
      category: 'subspaces',
      type: 'MsgMoveSection',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <MoveSection message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

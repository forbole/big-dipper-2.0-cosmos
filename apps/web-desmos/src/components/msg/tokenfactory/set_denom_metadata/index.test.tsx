import renderer from 'react-test-renderer';
import SetDenomMetadata from '@/components/msg/tokenfactory/set_denom_metadata';
import MsgSetDenomMetadata from '@/models/msg/tokenfactory/msg_set_denom_metadata';
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
describe('screen: TransactionDetails/SetDenomMetadata', () => {
  it('matches snapshot', () => {
    const message: MsgSetDenomMetadata = {
      category: 'tokenfactory',
      type: 'MsgSetDenomMetadata',
      sender: 'sender',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <SetDenomMetadata message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

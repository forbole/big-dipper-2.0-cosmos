import renderer from 'react-test-renderer';
import RemoveReason from '@/components/msg/reports/remove_reason';
import MsgRemoveReason from '@/models/msg/reports/msg_remove_reason';
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
describe('screen: TransactionDetails/RemoveReason', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveReason = {
      category: 'reports',
      type: 'MsgRemoveReason',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveReason message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

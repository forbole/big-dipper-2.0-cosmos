import renderer from 'react-test-renderer';
import SupportStandardReason from '@/components/msg/reports/support_standard_reason';
import MsgSupportStandardReason from '@/models/msg/reports/msg_support_standard_reason';
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
describe('screen: TransactionDetails/SupportStandardReason', () => {
  it('matches snapshot', () => {
    const message: MsgSupportStandardReason = {
      category: 'reports',
      type: 'MsgSupportStandardReason',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <SupportStandardReason message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

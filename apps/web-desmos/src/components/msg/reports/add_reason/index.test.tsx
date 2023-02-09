import renderer from 'react-test-renderer';
import AddReason from '@/components/msg/reports/add_reason';
import MsgAddReason from '@/models/msg/reports/msg_add_reason';
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
describe('screen: TransactionDetails/AddReason', () => {
  it('matches snapshot', () => {
    const message: MsgAddReason = {
      category: 'reports',
      type: 'MsgAddReason',
      signer: 'signer',
      title: 'title',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddReason message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

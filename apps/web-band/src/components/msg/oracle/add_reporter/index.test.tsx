import renderer from 'react-test-renderer';
import AddReporter from '@/components/msg/oracle/add_reporter';
import MsgAddReporter from '@/models/msg/oracle/msg_add_reporter';
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
describe('screen: TransactionDetails/AddReporter', () => {
  it('matches snapshot', () => {
    const message: MsgAddReporter = {
      type: 'oracle',
      validatorAddress: 'validator',
      reporterAddress: 'reporter',
      category: 'oracle',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddReporter message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

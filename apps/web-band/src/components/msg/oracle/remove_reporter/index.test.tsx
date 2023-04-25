import renderer from 'react-test-renderer';
import RemoveReporter from '@/components/msg/oracle/remove_reporter';
import MsgRemoveReporter from '@/models/msg/oracle/msg_remove_reporter';
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
describe('screen: TransactionDetails/RemoveReporter', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveReporter = {
      type: 'oracle',
      validatorAddress: 'validator',
      reporterAddress: 'reporter',
      category: 'oracle',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveReporter message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

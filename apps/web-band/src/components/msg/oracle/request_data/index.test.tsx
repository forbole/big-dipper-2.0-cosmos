import renderer from 'react-test-renderer';
import RequestData from '@/components/msg/oracle/request_data';
import MsgRequestData from '@/models/msg/oracle/msg_request_data';
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
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message: MsgRequestData = {
      type: 'MsgBlockUser',
      sender: 'sender',
      oracleScriptId: 100,
      category: 'oracle',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RequestData message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

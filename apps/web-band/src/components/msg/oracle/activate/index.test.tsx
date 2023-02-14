import renderer from 'react-test-renderer';
import Activate from '@/components/msg/oracle/activate';
import MsgActivate from '@/models/msg/oracle/msg_activate';
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
describe('screen: TransactionDetails/Activate', () => {
  it('matches snapshot', () => {
    const message = MsgActivate.fromJson({
      type: 'MsgCreateDataSource',
      validator: 'validator',
    });
    const component = renderer.create(
      <MockTheme>
        <Activate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

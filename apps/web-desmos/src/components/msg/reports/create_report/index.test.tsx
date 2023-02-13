import renderer from 'react-test-renderer';
import CreateReport from '@/components/msg/reports/create_report';
import MsgCreateReport from '@/models/msg/reports/msg_create_report';
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
describe('screen: TransactionDetails/CreateReport', () => {
  it('matches snapshot', () => {
    const message: MsgCreateReport = {
      category: 'reports',
      type: 'MsgCreateReport',
      reporter: 'reporter',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateReport message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import CreateDataSource from '@/components/msg/oracle/create_data_source';
import MsgCreateDataSource from '@/models/msg/oracle/msg_create_data_source';
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
describe('screen: TransactionDetails/CreateDataSource', () => {
  it('matches snapshot', () => {
    const message: MsgCreateDataSource = {
      type: 'MsgCreateDataSource',
      name: 'name',
      sender: 'name',
      category: 'oracle',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateDataSource message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

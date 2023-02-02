import renderer from 'react-test-renderer';
import CreateOracleScript from '@/components/msg/oracle/create_oracle_script';
import MsgCreateOracleScript from '@/models/msg/oracle/msg_create_oracle_script';
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
    const message: MsgCreateOracleScript = {
      type: 'MsgCreateOracleScript',
      name: 'name',
      sender: 'name',
      category: 'oracle',
      description: 'description',
      schema: 'schema',
      code: JSON.parse('{}'),
      owner: 'owner',
      sourceCodeUrl: '',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateOracleScript message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import EditOracleScript from '@/components/msg/oracle/edit_oracle_script';
import MsgEditOracleScript from '@/models/msg/oracle/msg_edit_oracle_script';
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
    const message: MsgEditOracleScript = {
      type: 'MsgEditOracleScript',
      name: 'name',
      sender: 'name',
      category: 'oracle',
      oracleScriptId: 0,
      description: '',
      schema: '',
      code: JSON.parse('{}'),
      sourceCodeUrl: '',
      owner: '',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditOracleScript message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

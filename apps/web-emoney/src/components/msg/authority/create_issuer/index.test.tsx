import renderer from 'react-test-renderer';
import CreateIssuer from '@/components/msg/authority/create_issuer';
import MsgCreateIssuer from '@/models/msg/authority/msg_create_issuer';
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
describe('screen: TransactionDetails/MsgCreateIssuer', () => {
  it('matches snapshot', () => {
    const message: MsgCreateIssuer = {
      category: 'authority',
      type: 'MsgCreateIssuer',
      authority: 'authority',
      issuer: 'issuer',
      denominations: ['donom 1', 'denom 2'],
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateIssuer message={message} />
      </MockTheme>
    );

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

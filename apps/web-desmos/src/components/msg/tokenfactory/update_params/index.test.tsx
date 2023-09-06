import renderer from 'react-test-renderer';
import UpdateParams from '@/components/msg/tokenfactory/update_params';
import MsgUpdateParams from '@/models/msg/tokenfactory/msg_update_params';
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
describe('screen: TransactionDetails/UpdateParams', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateParams = {
      category: 'tokenfactory',
      type: 'MsgUpdateParams',
      authority: 'authority',
      params: '{}',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UpdateParams message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

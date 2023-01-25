import renderer from 'react-test-renderer';
import Register from '@/components/msg/tokenregistry/register';
import MsgRegister from '@/models/msg/tokenregistry/msg_register';
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
describe('screen: TransactionDetails/MsgBurn', () => {
  it('matches snapshot', () => {
    const message: MsgRegister = {
      category: 'dispensation',
      type: 'MsgRegister',
      from: 'from',
      entry: {
        denom: 'daric',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Register message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRegister'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgRegister' }).props.values.denom
    ).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

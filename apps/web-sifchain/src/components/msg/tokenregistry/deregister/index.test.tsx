import renderer from 'react-test-renderer';
import Deregister from '@/components/msg/tokenregistry/deregister';
import MsgDeregister from '@/models/msg/tokenregistry/msg_deregister';
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
    const message: MsgDeregister = {
      category: 'dispensation',
      type: 'MsgRegister',
      from: 'from',
      denom: 'daric',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Deregister message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgDeregister'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgDeregister' }).props.values.denom
    ).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

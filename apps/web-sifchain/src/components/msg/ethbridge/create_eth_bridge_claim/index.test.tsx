import renderer from 'react-test-renderer';
import CreateEthBridgeClaim from '@/components/msg/ethbridge/create_eth_bridge_claim';
import MsgCreateEthBridgeClaim from '@/models/msg/ethbridge/msg_create_eth_bridge_claim';
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
describe('screen: TransactionDetails/CreateEthBridgeClaim', () => {
  it('matches snapshot', () => {
    const message: MsgCreateEthBridgeClaim = {
      category: 'dispensation',
      type: 'MsgBurn',
      ethBridgeClaim: {
        cosmosreceiver: 'cosmosreceiver',
        claimType: 'CLAIM_TYPE_UNSPECIFIED',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateEthBridgeClaim message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateEthBridgeClaim'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

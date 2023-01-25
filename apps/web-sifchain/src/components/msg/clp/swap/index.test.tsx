import renderer from 'react-test-renderer';
import Swap from '@/components/msg/clp/swap';
import MsgSwap from '@/models/msg/clp/msg_swap';
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
describe('screen: TransactionDetails/Swap', () => {
  it('matches snapshot', () => {
    const message: MsgSwap = {
      category: 'bank',
      type: 'MsgCreatePool',
      signer: 'signer',
      sentAsset: {
        symbol: 'udaric',
      },
      receivedAsset: {
        symbol: 'udaric',
      },
      sentAmount: '4000000',
      minReceivingAmount: '51000000',
      receivedAmount: '51000000',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <Swap message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgSwap'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgSwap' }).props.values
        .receivedAmount
    ).toEqual('51 DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import AddLiquidity from '@/components/msg/clp/add_liquidity';
import MsgAddLiquidity from '@/models/msg/clp/msg_add_liquidity';
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
describe('screen: TransactionDetails/AddLiquidity', () => {
  it('matches snapshot', () => {
    const message: MsgAddLiquidity = {
      category: 'bank',
      type: 'MsgAddLiquidity',
      signer: 'signer',
      externalAsset: {
        symbol: 'ubar',
      },
      nativeAssetAmount: '4000000',
      externalAssetAmount: '0',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddLiquidity message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAddLiquidity'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgAddLiquidity' }).props.values
        .nativeAssetAmount
    ).toEqual('0.000000000004 ROWAN');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

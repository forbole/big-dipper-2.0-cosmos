import AddLiquidity from '@/components/msg/clp/add_liquidity';
import MsgAddLiquidity from '@/models/msg/clp/msg_add_liquidity';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAddLiquidity'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.nativeAssetAmount).toEqual(
      '0.000000000004 ROWAN'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import renderer from 'react-test-renderer';
import CreatePool from '@/components/msg/clp/create_pool';
import MsgCreatePool from '@/models/msg/clp/msg_create_pool';
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
describe('screen: TransactionDetails/CreatePool', () => {
  it('matches snapshot', () => {
    const message: MsgCreatePool = {
      category: 'bank',
      type: 'MsgCreatePool',
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
        <CreatePool message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreatePool'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgCreatePool' }).props.values
        .nativeAssetAmount
    ).toEqual('0.000000000004 ROWAN');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

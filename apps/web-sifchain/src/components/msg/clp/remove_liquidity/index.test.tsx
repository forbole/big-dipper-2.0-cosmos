import renderer from 'react-test-renderer';
import RemoveLiquidity from '@/components/msg/clp/remove_liquidity';
import MsgRemoveLiquidity from '@/models/msg/clp/msg_remove_liquidity';
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
describe('screen: TransactionDetails/MsgRemoveLiquidity', () => {
  it('matches snapshot', () => {
    const message: MsgRemoveLiquidity = {
      category: 'bank',
      type: 'MsgRemoveLiquidity',
      signer: 'signer',
      externalAsset: {
        symbol: 'udaric',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RemoveLiquidity message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRemoveLiquidity'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgRemoveLiquidity' }).props.values
        .symbol
    ).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

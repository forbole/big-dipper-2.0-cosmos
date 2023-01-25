import renderer from 'react-test-renderer';
import ConvertCoin from '@/components/msg/erc20/convert_coin';
import MsgConvertCoin from '@/models/msg/erc20/msg_convert_coin';
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
describe('screen: TransactionDetails/MsgConvertCoin', () => {
  it('matches snapshot', () => {
    const message: MsgConvertCoin = {
      category: 'erc20',
      type: 'MsgSend',
      receiver: '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104',
      sender: 'evmos1s9waleajyy7hzdzpml3kvhakea0vfepkw7x8a2',
      coin: {
        denom: 'udaric',
        amount: '33600',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <ConvertCoin message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgConvertCoin'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgConvertCoin' }).props.values
        .receiver
    ).toEqual('0x6B6A7D59f854d1d9F38881A6502f4970f96A0104');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

import ConvertErc20 from '@/components/msg/erc20/convert_erc20';
import MsgConvertErc20 from '@/models/msg/erc20/msg_convert_erc20';
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
describe('screen: TransactionDetails/MsgConvertErc20', () => {
  it('matches snapshot', () => {
    const message: MsgConvertErc20 = {
      category: 'erc20',
      type: 'MsgSend',
      sender: '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104',
      receiver: 'evmos1s9waleajyy7hzdzpml3kvhakea0vfepkw7x8a2',
      amount: '33600atevmos',
      contractAddress: '',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <ConvertErc20 message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.values.sender).toEqual(
      '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgConvertErc20'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

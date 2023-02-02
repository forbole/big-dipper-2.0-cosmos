import renderer from 'react-test-renderer';
import ChannelOpenAck from '@/components/msg/ibc/channel_open_ack';
import { MsgChannelOpenAck } from '@/models';
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
describe('screen: TransactionDetails/IBCChannelOpenAck', () => {
  it('matches snapshot', () => {
    const message = MsgChannelOpenAck.fromJson({
      category: 'ibc',
      type: 'MsgChannelOpenAck',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      channel_id: '1',
      port_id: '21',
      counterparty_channel_id: '12',
      counterparty_version: '1.0',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ChannelOpenAck message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

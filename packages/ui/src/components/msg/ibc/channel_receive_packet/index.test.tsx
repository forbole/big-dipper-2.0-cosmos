import renderer from 'react-test-renderer';
import ReceivePacket from '@/components/msg/ibc/channel_receive_packet';
import { MsgReceivePacket } from '@/models';
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
describe('screen: TransactionDetails/IBCReceivePacket', () => {
  it('matches snapshot', () => {
    const message = MsgReceivePacket.fromJson({
      category: 'ibc',
      type: 'MsgReceivePacket',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      source_channel: 'channel-1',
      destination_channel: 'channel-21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ReceivePacket message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

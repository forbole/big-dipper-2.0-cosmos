import renderer from 'react-test-renderer';
import ChannelOpenTry from '@/components/msg/ibc/channel_open_try';
import { MsgChannelOpenTry } from '@/models';
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
describe('screen: TransactionDetails/IBCChannelOpenTry', () => {
  it('matches snapshot', () => {
    const message = MsgChannelOpenTry.fromJson({
      category: 'ibc',
      type: 'MsgChannelOpenTry',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      channel: '1',
      port_id: '21',
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
        <ChannelOpenTry message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

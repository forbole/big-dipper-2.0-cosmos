import renderer from 'react-test-renderer';
import ChannelOpenConfirm from '@/components/msg/ibc/channel_open_confirm';
import { MsgChannelOpenConfirm } from '@/models';
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
describe('screen: TransactionDetails/IBCChannelOpenConfirm', () => {
  it('matches snapshot', () => {
    const message = MsgChannelOpenConfirm.fromJson({
      category: 'ibc',
      type: 'MsgChannelOpenConfirm',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      channel_id: '1',
      port_id: '21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ChannelOpenConfirm message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

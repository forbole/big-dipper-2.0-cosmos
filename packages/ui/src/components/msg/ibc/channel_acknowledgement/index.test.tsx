import renderer from 'react-test-renderer';
import Acknowledgement from '@/components/msg/ibc/channel_acknowledgement';
import { MsgAcknowledgement } from '@/models';
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
describe('screen: TransactionDetails/IBCChannelAcknowledgement', () => {
  it('matches snapshot', () => {
    const message = MsgAcknowledgement.fromJson({
      category: 'ibc',
      type: 'MsgAcknowledgement',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      source_channel: 'channel-2',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <Acknowledgement message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

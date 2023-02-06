import renderer from 'react-test-renderer';
import ConnectionOpenAck from '@/components/msg/ibc/connection_open_ack';
import { MsgConnectionOpenAck } from '@/models';
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
describe('screen: TransactionDetails/IBCConnectionOpenAck', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenAck.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenAck',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      connection_id: '1',
      counterparty_connection_id: '21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ConnectionOpenAck message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

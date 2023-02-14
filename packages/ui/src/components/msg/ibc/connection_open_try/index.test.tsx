import renderer from 'react-test-renderer';
import ConnectionOpenTry from '@/components/msg/ibc/connection_open_try';
import { MsgConnectionOpenTry } from '@/models';
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
describe('screen: TransactionDetails/IBCConnectionOpenTry', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenTry.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenTry',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      chain_id: 'chain-1',
      client_id: '21',
      counterparty: {
        client_id: '2',
        connection_id: '221',
      },
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ConnectionOpenTry message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

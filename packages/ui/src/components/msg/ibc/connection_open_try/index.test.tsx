import ConnectionOpenTry from '@/components/msg/ibc/connection_open_try';
import { MsgConnectionOpenTry } from '@/models';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

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
      chainId: 'chain-1',
      clientId: '21',
      counterpartyClientId: '2',
      counterpartyConnectionId: '221',
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

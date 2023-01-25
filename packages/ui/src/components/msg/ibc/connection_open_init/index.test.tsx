import renderer from 'react-test-renderer';
import ConnectionOpenInit from '@/components/msg/ibc/connection_open_init';
import { MsgConnectionOpenInit } from '@/models';
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
describe('screen: TransactionDetails/IBCConnectionOpenInit', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenInit.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenInit',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      client_id: '1',
      counterparty: '21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ConnectionOpenInit message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
